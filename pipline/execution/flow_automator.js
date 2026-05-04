const path = require("path");
const fs = require("fs");

/**
 * Google Flow 이미지 다운로드 함수 (1K 원본 크기)
 * @param {import('playwright').Page} page 
 * @param {string} sceneId 
 * @param {number} imageIndex 그리드 내 이미지 인덱스 (0이 가장 최근)
 */
async function downloadSceneImage(page, sceneId, imageIndex = 0) {
    const downloadDir = path.resolve("assets/images");

    if (!fs.existsSync(downloadDir)) {
        fs.mkdirSync(downloadDir, { recursive: true });
    }

    const savePath = path.join(downloadDir, `${sceneId}.png`);

    try {
        console.log(`[${sceneId}] 다운로드 시작 (Index: ${imageIndex})...`);

        // 1. 이미지 컨테이너 찾기 (그리드 내 버튼 역할의 div)
        const imageContainers = page.locator('div[role="button"]:has(img)');
        const targetContainer = imageContainers.nth(imageIndex);
        
        // 2. 컨테이너에 호버하여 버튼 노출 유도
        await targetContainer.waitFor({ state: 'visible', timeout: 10000 });
        await targetContainer.hover();
        await page.waitForTimeout(1000);

        // 3. 점 3개 버튼 찾기 및 클릭
        const moreBtn = targetContainer.locator('button:has(i:text-is("more_vert")), button:has-text("more_vert")').first();
        await moreBtn.waitFor({ state: 'visible', timeout: 5000 });
        await moreBtn.click();
        await page.waitForTimeout(1500);

        // 디버깅: 현재 열린 모든 메뉴 아이템/버튼 텍스트 로깅
        const allButtons = await page.locator('button, [role="menuitem"], div[role="button"]').allTextContents();
        console.log(`[${sceneId}] 현재 화면의 버튼들:`, allButtons.filter(t => t.trim().length > 0).slice(0, 20));

        // 4. '다운로드' 메뉴 항목 찾기 및 클릭
        const downloadMenu = page.locator('button, [role="menuitem"], div').filter({ hasText: /^다운로드$|^Download$/i }).first();
        
        try {
            await downloadMenu.waitFor({ state: 'visible', timeout: 10000 });
            await downloadMenu.click();
        } catch (e) {
            console.log(`[${sceneId}] 기본 선택자 실패, 텍스트 포함 검색 시도...`);
            await page.locator('text=/다운로드|Download/i').first().click();
        }
        await page.waitForTimeout(1000);

        // 5. '1K 원본 크기' 버튼 클릭 및 다운로드 대기
        const downloadBtn = page.locator('button, [role="menuitem"]').filter({ hasText: /1K/ }).first();
        const [download] = await Promise.all([
            page.waitForEvent("download", { timeout: 30000 }), 
            downloadBtn.click()
        ]);

        // 6. 지정된 경로로 파일 저장
        await download.saveAs(savePath);
        console.log(`[${sceneId}] 저장 완료: ${savePath}`);
        return savePath;

    } catch (error) {
        console.error(`[${sceneId}] 다운로드 실패:`, error.message);
        throw error;
    }
}

module.exports = { downloadSceneImage };


