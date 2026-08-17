
import { test, expect, Locator, Page } from '@playwright/test';
import { POManager } from "../pageobjects/POManager"
import placeorderTestData from "../utils/placeorderTestData.json";
const dataset = JSON.parse(JSON.stringify(placeorderTestData));

dataset.forEach((data: any) => {
    test(`Login - ${data.description}`, async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validateLogin(data.username, data.password);

        // // await expect(page.getByText("รายได้ค่านายหน้า")).toBeVisible();


        // const insertProjectCondo = poManager.getInsertProjectCondo();
        // await insertProjectCondo.navigateToBuildingsPage(),
        //     await Promise.all([
        //         page.waitForResponse(response =>
        //             response.url().includes("https://rsglnrnftuduxqsspxfv.supabase.co/rest/v1/buildings?select=*&order=name.asc") &&
        //             response.status() === 200
        //         ),

        //     ]);

        // await insertProjectCondo.addAnotherBuildings();
        // await insertProjectCondo.fillFields();
        // await insertProjectCondo.saveProject();


        // const insertOwner = poManager.getInsertOwner();
        // await insertOwner.navigateToOwnerPage(),

        //     await Promise.all([
        //         page.waitForResponse(response =>
        //             response.url().includes("https://rsglnrnftuduxqsspxfv.supabase.co/rest/v1/owners?select=*&order=name.asc") &&
        //             response.status() === 200
        //         )
        //     ]);
        // await insertOwner.addAnotherOwner();
        // await insertOwner.fillFields();
        // await insertOwner.saveProject();

        const insertNewAsset = poManager.getInsertNewAsset();
        await insertNewAsset.navigateToNewAssetPage();
        await insertNewAsset.waitForPageReady();
        await insertNewAsset.clickAddNewAsset();
        await insertNewAsset.fillDetailsAsset();
    });



})