import { test, expect, Locator, Page } from '@playwright/test';

export class InsertOwner{
    page: Page;
    ownerPage: Locator;
    addOwner: Locator;
    fillName: Locator;
    fillPhoneNumber: Locator;
    fillLineIDOwner: Locator;
    fillEmailOwner: Locator;   
    fillFindOwner: Locator;
    fillNote: Locator;
    createOwner: Locator;

    constructor(page:Page){
        this.page = page;
        this.ownerPage = page.locator("[href*='/admin/owners']");
        this.addOwner = page.locator("text= เพิ่มเจ้าของใหม่")
        this.fillName = page.getByPlaceholder("เช่น สมศักดิ์ วงศ์ทอง");
        this.fillPhoneNumber = page.getByPlaceholder("08X-XXX-XXXX");
        this.fillLineIDOwner = page.getByPlaceholder("@owner");
        this.fillEmailOwner = page.getByPlaceholder("owner@email.com");
        this.fillFindOwner = page.getByPlaceholder("เช่น Facebook, แนะนำโดยลูกค้า...");
        this.fillNote = page.getByPlaceholder("บันทึกเพิ่มเติม...");

        const dialog = page.locator("div.fixed.inset-0.z-50");
        this.createOwner = dialog.getByRole("button", {
    name: "เพิ่มเจ้าของ"
})

        
    }

    async navigateToOwnerPage(){
        await this.ownerPage.click();
    }

    async addAnotherOwner(){
        await this.addOwner.click();
    }

     async fillFields(){
        await this.fillName.fill("K.เดียร์");
        await this.fillPhoneNumber.fill("0980915461");
        await this.fillLineIDOwner.fill("dearr_pth");
        await this.fillEmailOwner.fill("deardear25443@gmail.com");
        await this.fillFindOwner.fill("Facebook Group");
        await this.fillNote.fill("FB: Piyanuch Thong-iad");
    }

    async saveProject() {
    await Promise.all([
            this.page.waitForResponse(response =>
                response.url().includes("https://rsglnrnftuduxqsspxfv.supabase.co/rest/v1/owners?columns=%22name%22%2C%22phone%22%2C%22email%22%2C%22line_id%22%2C%22source%22%2C%22note%22%2C%22org_id%22&select=*") &&
                response.request().method() === "POST" &&
                response.status() === 201
            ),
            this.createOwner.click(),
        ]);

    
    }
}