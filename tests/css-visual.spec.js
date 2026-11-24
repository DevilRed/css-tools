import { expect, test } from "@playwright/test";

test("Card component visual regression", async ({ page }) => {
  // 1. Start the dev server (or point to your built dist folder)
  // For this example, we assume you run `npm run dev` on port 5173
  await page.goto("http://localhost:5173");

  // 2. Wait for the component to be fully rendered and fonts loaded
  await page.waitForSelector(".card");

  // 3. Take a screenshot of the specific component and compare it to the baseline
  const card = page.locator(".card");
  await expect(card).toHaveScreenshot("card-component.png", {
    maxDiffPixels: 100, // Allow minor anti-aliasing differences
  });
});

test("Button hover state visual regression", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const button = page.locator(".button--primary");
  // make sure element is rendered
  await button.waitFor({ state: "visible" });

  await button.hover(); // Trigger CSS :hover state
  await page.waitForTimeout(250);// wait for the transition effect

  await expect(button).toHaveScreenshot("button-hover-state.png", {
    animations: "disabled",
    maxDiffPixels: 150,
  });
});
