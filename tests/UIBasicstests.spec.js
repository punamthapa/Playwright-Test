import { test, expect } from '@playwright/test';

test('first Playwright Test', async ({  page}) => {
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator("#username").fill("learning")
    await page.locator("#password").fill("learning")
    await page.locator("#signInBtn").click()  ;
    console.log(await page.locator(" [style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    
    
   
    
  });
  

