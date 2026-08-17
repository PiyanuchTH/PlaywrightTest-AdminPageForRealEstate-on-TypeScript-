import { test, expect, Locator, Page } from '@playwright/test';

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
        await this.page.goto("https://the-cozy-keys-frontend.vercel.app/admin/login");
    }

    async validateLogin(username: string, password: string){
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();
    }
}

// module.exports = {LoginPage};