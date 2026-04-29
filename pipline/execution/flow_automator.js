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

        // 1. 지정된 인덱스의 이미지 요소 찾기
        const targetImage = page.locator('img[src*="lh3.googleusercontent.com"]').nth(imageIndex);
        
        // 2. 이미지 호버 -> 점 3개(⋮) 버튼 노출
        await targetImage.hover();
        await page.waitForTimeout(500); // UI 반응 대기
        
        // 3. 해당 이미지 내의 점 3개(⋮) 버튼 클릭
        // 이미지가 여러 개이므로, targetImage의 부모나 형제 요소에서 버튼을 찾아야 할 수도 있음.
        // Google Flow 구조상 이미지 근처의 버튼을 찾습니다.
        const moreBtn = page.locator('button:has-text("more_vert")').nth(imageIndex);
        await moreBtn.click();

        // 4. '다운로드' 메뉴 항목 호버
        const downloadMenu = page.locator('div[role="menuitem"]:has-text("다운로드")');
        await downloadMenu.hover();

        // 5. '1K 원본 크기' 버튼 클릭 및 다운로드 대기
        const [download] = await Promise.all([
            page.waitForEvent("download", { timeout: 30000 }), 
            page.locator('button[role="menuitem"]:has-text("1K")').click()
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


