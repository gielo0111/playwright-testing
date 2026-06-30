import { test, expect, Locator } from '@playwright/test';

/*
    Locator  - Identifies the element on the page 
    DOM - Document Object Model
 */

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


test("Verify Playwright locators", async ({ page }) => {
    await page.goto("https://gielo0111.github.io/LagLife_of_Toby_Peds_Gielo/");
    
    await expect(
        page.getByRole("link", {
        name: "I’m in Lag by Gielo",
        exact: true,
    })).toBeVisible();

    await expect(
        page.getByRole("link", {
        name: "Life of Lag by Toby",
        exact: true,
    })).toBeVisible();

    await expect(
        page.getByRole("link", {
        name: "Lag Life of Peds",
        exact: true,
    })).toBeVisible();
});
