import { test } from '@playwright/test';
import { POManager } from "../pageobjects/POManager";
import { ADMIN_URL, AUTH_FILE } from "../utils/constants";

test.use({ storageState: AUTH_FILE });

test('Create Project (Condo)', async ({ page }) => {
    await page.goto(ADMIN_URL);

    const poManager = new POManager(page);
    const insertProjectCondo = poManager.getInsertProjectCondo();

    await Promise.all([
        page.waitForResponse(response =>
            response.url().includes("https://rsglnrnftuduxqsspxfv.supabase.co/rest/v1/buildings?select=*&order=name.asc") &&
            response.status() === 200
        ),
        insertProjectCondo.navigateToBuildingsPage(),
    ]);

    await insertProjectCondo.addAnotherBuildings();
    await insertProjectCondo.fillFields();
    await insertProjectCondo.saveProject();
});