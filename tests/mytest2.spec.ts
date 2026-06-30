import { test, expect } from '@playwright/test';


test("Verify page URL", async ({ page }) => {
//steps2
    await page.goto("https://gielo0111.github.io/LagLife_of_Toby_Peds_Gielo/");

    let title:string = await page.url();
    console.log("URL of the page is: " + title);
    
    await expect(page).toHaveURL(/LagLife_of_Toby_Peds_Gielo/)
});