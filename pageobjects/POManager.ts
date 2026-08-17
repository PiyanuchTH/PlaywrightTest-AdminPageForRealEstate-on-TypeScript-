import { InsertOwner } from './InsertOwner';
import {LoginPage} from './LoginPage';
import {InsertProjectCondo} from './InsertProjectCondo';
import {Page} from '@playwright/test';
import { InsertNewAsset } from './InsertNewAsset';
 
export class POManager
{
    page:Page;
    loginPage:LoginPage;
    insertProjectCondo:InsertProjectCondo;
    insertOwner: InsertOwner;
    insertNewAsset: InsertNewAsset;

    constructor(page:any){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.insertProjectCondo = new InsertProjectCondo(this.page);
        this.insertOwner = new InsertOwner(this.page);
        this.insertNewAsset = new InsertNewAsset(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getInsertProjectCondo(){
        return this.insertProjectCondo;
    }

    getInsertOwner(){
        return this.insertOwner;
    }

    getInsertNewAsset(){
        return this.insertNewAsset;
    }

}