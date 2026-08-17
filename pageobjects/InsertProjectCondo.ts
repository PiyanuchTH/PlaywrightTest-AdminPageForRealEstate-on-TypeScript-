import { test, expect, Locator, Page } from '@playwright/test';

export class InsertProjectCondo {
    page: Page;
    buildings: Locator;
    addBuildings: Locator;
    fillThaiName: Locator;
    fillEnglishName: Locator;
    fillLinkLocation: Locator;
    selectDistrict: Locator;
    selectProvince: Locator;
    fillFacilities: Locator;
    buttonAddFac: Locator;
    fillLocation: Locator;
    buttonAddLo: Locator;
    createBuildings: Locator;
    // loadingPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buildings = page.locator("[href*='/admin/buildings']");
        this.addBuildings = page.locator("text= เพิ่มโครงการ")

        this.fillThaiName = page.getByPlaceholder("เช่น ลุมพินี วิลล์ ศรีราชา");
        this.fillEnglishName = page.getByPlaceholder("e.g. Lumpini Ville Sriracha");
        this.fillLinkLocation = page.getByPlaceholder("วาง link Google Maps ที่นี่...");
        this.fillLinkLocation = page.getByPlaceholder("วาง link Google Maps ที่นี่...");
        this.selectDistrict = page.locator("select").first();
        this.selectProvince = page.locator("select").nth(1);
        this.fillFacilities = page.getByPlaceholder("เช่น สระว่ายน้ำ, ฟิตเนส...");
        this.buttonAddFac = page.getByPlaceholder("เช่น สระว่ายน้ำ, ฟิตเนส...")
            .locator('xpath=following-sibling::button')
        this.fillLocation = page.getByPlaceholder("เช่น โรงพยาบาลสมิติเวช — ~2 กม.");
        this.buttonAddLo = page.getByPlaceholder("เช่น โรงพยาบาลสมิติเวช — ~2 กม.")
            .locator('xpath=following-sibling::button');
        this.createBuildings = page.getByRole("button", { name: "สร้าง" });


    }

    async navigateToBuildingsPage() {
        await this.buildings.click();
    }

    async addAnotherBuildings() {
        await this.addBuildings.click();
    }

    async fillFields() {
        await this.fillThaiName.fill("ดี คอนโด บลิซ");
        await this.fillEnglishName.fill("D condo bliss");
        await this.fillLinkLocation.fill("https://maps.app.goo.gl/ELV3rshmZFa62EFm8");
        await this.selectDistrict.selectOption("ศรีราชา");
        await this.selectProvince.selectOption("ชลบุรี");
        await this.fillFacilities.fill("Fitness")
        await this.buttonAddFac.click();
        await this.fillLocation.fill("Kasetsart University")
        await this.buttonAddLo.click();

    }
    async saveProject() {
        await Promise.all([
            this.page.waitForResponse(response =>
                response.url().includes("https://rsglnrnftuduxqsspxfv.supabase.co/rest/v1/buildings?columns=%22name%22%2C%22name_en%22%2C%22district%22%2C%22province%22%2C%22google_map_url%22%2C%22facilities%22%2C%22nearby%22%2C%22org_id%22&select=*") &&
                response.request().method() === "POST" &&
                response.status() === 201
            ),
            this.createBuildings.click(),
        ]);
    }
}