import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './pageobjects/LoginPage';
import { AUTH_FILE } from './utils/constants';
import placeorderTestData from './utils/placeorderTestData.json';

async function globalSetup(config: FullConfig) {
    const validCredentials = placeorderTestData.find(
        (data: any) => data.description === "Valid Username + Valid Password"
    );

    const browser = await chromium.launch();
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.goTo();
    await loginPage.validateLogin(validCredentials.username, validCredentials.password);

    const loginSuccess = await loginPage.isLoggedIn();
    if (!loginSuccess) {
        await browser.close();
        throw new Error('Global setup: login failed, cannot create storage state for authenticated tests.');
    }

    await page.context().storageState({ path: AUTH_FILE });
    await browser.close();
}

export default globalSetup;
