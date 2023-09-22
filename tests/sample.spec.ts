import { expect, test } from "@playwright/test";

test("test 1", async ({ page }) => {
  await page.goto("/");
  expect(await page.title()).toEqual("GitHub: Let’s build from here · GitHub");
});
