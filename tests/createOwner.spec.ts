import { test } from '@playwright/test';
import { POManager } from "../pageobjects/POManager";
import { ADMIN_URL, AUTH_FILE } from "../utils/constants";

test.use({ storageState: AUTH_FILE });

test('Create Owner', async ({ page }) => {
    await page.goto(ADMIN_URL);

    const poManager = new POManager(page);
    const insertOwner = poManager.getInsertOwner();

    await insertOwner.navigateToOwnerPage();
    await insertOwner.addAnotherOwner();
    await insertOwner.fillFields();
    await insertOwner.saveProject();
});
