import { test } from '@playwright/test';
import { POManager } from "../pageobjects/POManager";
import { ADMIN_URL, AUTH_FILE } from "../utils/constants";

test.use({ storageState: AUTH_FILE });

test('Create New Asset', async ({ page }) => {
    await page.goto(ADMIN_URL);

    const poManager = new POManager(page);
    const insertNewAsset = poManager.getInsertNewAsset();

    await insertNewAsset.navigateToNewAssetPage();
    await insertNewAsset.waitForPageReady();
    await insertNewAsset.clickAddNewAsset();
    await insertNewAsset.fillDetailsAsset();
});
