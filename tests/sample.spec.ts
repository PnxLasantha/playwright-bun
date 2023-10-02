import { expect, test } from "@playwright/test";

test("test 1", async ({ page }) => {
  await page.goto("/api-mocking");
  expect(await page.title()).toEqual("Playwright API Mocking demo");
});
