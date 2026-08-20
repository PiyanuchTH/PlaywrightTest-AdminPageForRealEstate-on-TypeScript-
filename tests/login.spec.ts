import { test, expect } from '@playwright/test';
import { POManager } from "../pageobjects/POManager";
import placeorderTestData from "../utils/placeorderTestData.json";
const dataset = JSON.parse(JSON.stringify(placeorderTestData));

dataset.forEach((data: any) => {
    test(`Login - ${data.description}`, async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validateLogin(data.username, data.password);

        const loginSuccess = await loginPage.isLoggedIn();

        if (data.description === "Valid Username + Valid Password") {
            expect(loginSuccess).toBeTruthy();
        } else {
            expect(loginSuccess).toBeFalsy();
        }
    });
});
