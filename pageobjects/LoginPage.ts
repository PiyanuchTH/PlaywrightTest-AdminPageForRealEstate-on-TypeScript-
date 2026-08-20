import { test, expect, Locator, Page } from '@playwright/test';
import { LOGIN_URL } from '../utils/constants';

export class LoginPage
{
    signInbutton: Locator;
    userName: Locator;
    password: Locator;
    page: Page;

    constructor(page: Page){
        this.page = page;
        this.signInbutton = page.locator("button[type='submit']");
        this.userName = page.getByPlaceholder("admin@example.com");
        this.password = page.locator("input[type='password']");

    }

    async goTo(){
        await this.page.goto(LOGIN_URL);
    }

    async validateLogin(username: string, password: string){
        await this.userName.pressSequentially(username, { delay: 50 });
        await this.password.pressSequentially(password, { delay: 50 });
        await expect(this.userName).toHaveValue(username);
        await expect(this.password).toHaveValue(password);
        await this.signInbutton.click();
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            await this.page.waitForURL(url => !url.pathname.includes("/login"), { timeout: 20000 });
            return true;
        } catch {
            return false;
        }
    }
}

// module.exports = {LoginPage};