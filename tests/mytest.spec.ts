import { test, expect } from '@playwright/test';


/*
test("title", () => {
//steps1

});
*/

test("Verify page title", async ({ page }) => {
//steps2
    await page.goto("https://gielo0111.github.io/LagLife_of_Toby_Peds_Gielo/");

    let title:string = await page.title();
    console.log("Title of the page is: " + title);
    
    await expect(page).toHaveTitle("TobyGieloPeds | Lag Life of Toby, Gielo and Peds")
});