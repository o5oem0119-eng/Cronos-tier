const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { downloadSceneImage } = require("./flow_automator");

/**
 * [Chronos Engine] Image Generator Master (Final Polished Version)
 */

// 설정값
const TAB_COUNT = 2; 
const TEST_LIMIT = 10;
const PROMPTS_FILE = path.join(__dirname, "../../data/generated/danjong_tragedy_long/image_prompts.md");
const MANIFEST_FILE = path.join(__dirname, "../../data/generated/danjong_tragedy_long/manifest.json");
const USER_DATA_DIR = path.join(__dirname, "../../.chrome_session");

async function runGenerator() {
    const rawPrompts = fs.readFileSync(PROMPTS_FILE, "utf-8").split("\n").map(p => p.trim()).filter(p => p.length > 0);
    const scenes = rawPrompts.map((prompt, index) => ({ id: `scene_${String(index + 1).padStart(3, "0")}`, prompt }));

    let manifest = fs.existsSync(MANIFEST_FILE) ? JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf-8")) : {};
    let todoScenes = scenes.filter(s => manifest[s.id]?.status !== "success");
    if (TEST_LIMIT > 0) todoScenes = todoScenes.slice(0, TEST_LIMIT);

    if (todoScenes.length === 0) { console.log("모든 작업이 완료되었습니다."); return; }

    console.log("\n[Step 1] 브라우저 실행 중...");
    const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
        headless: false,
        channel: 'chrome',
        args: ['--disable-blink-features=AutomationControlled'],
        viewport: { width: 1280, height: 800 }
    });

    const pages = context.pages();
    const leaderPage = pages[0];

    console.log("[Step 2] 리더 탭: 새 프로젝트 생성 중...");
    await leaderPage.goto("https://labs.google/fx/ko/tools/flow");

    // 새 프로젝트 버튼 클릭 (정확한 선택자 적용)
    const newProjectBtn = leaderPage.locator('button:has-text("새 프로젝트"), button:has-text("New Project"), button:has(span:text-is("New Project"))');
    await newProjectBtn.waitFor({ state: 'visible', timeout: 600000 });
    await newProjectBtn.click();

    await leaderPage.waitForURL(/.*project\/.*/, { timeout: 60000 });
    const projectUrl = leaderPage.url();
    console.log(`\n[Step 3] 새 프로젝트 주소 획득: ${projectUrl}`);

    const chunks = [];
    const chunkSize = Math.ceil(todoScenes.length / TAB_COUNT);
    for (let i = 0; i < todoScenes.length; i += chunkSize) { chunks.push(todoScenes.slice(i, i + chunkSize)); }

    console.log(`[Step 4] 탭 ${TAB_COUNT}개로 작업 시작...\n`);
    const workerPages = [leaderPage];
    for (let i = 1; i < TAB_COUNT; i++) { workerPages.push(await context.newPage()); }

    const workers = chunks.map((chunk, i) => executeWorker(i + 1, workerPages[i], chunk, manifest, projectUrl));
    await Promise.all(workers);

    console.log("\n전체 작업 종료.");
    await context.close();
}

async function executeWorker(workerId, page, chunk, manifest, projectUrl) {
    console.log(`[Worker Tab ${workerId}] 시작 (작업량: ${chunk.length}개)`);

    try {
        await page.goto(projectUrl);
        const textbox = page.locator('div[role="textbox"]');
        await textbox.waitFor({ state: 'visible', timeout: 60000 });

        // 1. 초기 환경 설정 (나노바나나2, 16:9, 1개)
        console.log(`[Worker Tab ${workerId}] 환경 설정 자동화 수행 중...`);
        try {
            // 모델 설정창 열기
            const settingsBtn = page.locator('button[id^="radix-"]:has-text("Nano"), button:has(span:text-is("Nano Banana 2"))').first();
            await settingsBtn.click();
            await page.waitForTimeout(1000);

            // 비율 (LANDSCAPE = 16:9)
            await page.locator('button[id*="-trigger-LANDSCAPE"]').click();
            
            // 생성 개수 (1개)
            await page.locator('button[id*="-trigger-1"]').click();
            
            // 설정창 닫기 (외부 클릭)
            await page.mouse.click(10, 10);
            await page.waitForTimeout(1000);
        } catch (e) {
            console.log(`[Worker Tab ${workerId}] 설정 중 일부 건너뜀: ${e.message}`);
        }

        const initialCount = await page.locator('div[role="button"]:has(img):not(:has-text("%"))').count();

        // 2. 제출
        for (const scene of chunk) {
            await textbox.click();
            await page.keyboard.press('Control+A');
            await page.keyboard.press('Backspace');
            await textbox.fill(scene.prompt);
            await page.locator('button:has(i:text-is("arrow_forward")), button:has-text("만들기")').first().click();
            await page.waitForTimeout(2000);
            console.log(`[Worker Tab ${workerId}] ${scene.id} 제출 완료.`);
        }

        // 3. 완료 대기 (% 기호가 없는 이미지가 목표 개수만큼 나올 때까지)
        const targetTotal = initialCount + chunk.length;
        let attempts = 0;
        while (attempts < 120) {
            await page.waitForTimeout(5000);
            // "%" 텍스트를 포함하지 않는(생성 완료된) 이미지 그리드 아이템 개수 확인
            const currentDoneCount = await page.locator('div[role="button"]:has(img):not(:has-text("%"))').count();
            console.log(`[Worker Tab ${workerId}] 진행 상황: ${currentDoneCount}/${targetTotal}`);
            
            if (currentDoneCount >= targetTotal) {
                await page.waitForTimeout(5000); // 최종 안정화
                break;
            }
            attempts++;
        }

        // 4. 다운로드
        console.log(`[Worker Tab ${workerId}] 일괄 다운로드 시작...`);
        for (let i = 0; i < chunk.length; i++) {
            const imageIndex = i; // 0이 가장 최신
            const sceneIndex = chunk.length - 1 - i;
            const scene = chunk[sceneIndex];
            try {
                await downloadSceneImage(page, scene.id, imageIndex);
                updateManifest(scene.id, "success");
            } catch (e) {
                updateManifest(scene.id, "failed", e.message);
            }
        }
    } catch (err) {
        console.error(`[Worker Tab ${workerId}] 오류:`, err.message);
    }
}

function updateManifest(sceneId, status, error = null) {
    let current = fs.existsSync(MANIFEST_FILE) ? JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf-8")) : {};
    current[sceneId] = { status, attempt: (current[sceneId]?.attempt || 0) + 1, timestamp: new Date().toISOString(), error };
    fs.writeFileSync(MANIFEST_FILE, JSON.stringify(current, null, 4));
}

runGenerator().catch(console.error);
