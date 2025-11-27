const { test, expect } = require('@playwright/test');

test('測試 Playwright 官網標題', async ({ page }) => {
  // 1. 前往 Playwright 官方文件網站 (這裡沒有 Cookie 擋路)
  await page.goto('https://playwright.dev/');

  // 2. 驗證標題是否包含 "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // 3. 嘗試點擊 "Get started" 按鈕 (驗證互動功能)
  await page.getByRole('link', { name: 'Get started' }).click();

  // 4. 驗證網址是否變更為 introduction 頁面
  await expect(page).toHaveURL(/.*intro/);
});