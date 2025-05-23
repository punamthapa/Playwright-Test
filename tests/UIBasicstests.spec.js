import { test, expect } from '@playwright/test';

test('test for incorrect username and password', async ({  page}) => {
    const userName= page.locator("#username");
    const password= page.locator("#password");
    const loginButton = page.locator("#signInBtn");

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill("learning")
    await page.locator("#password").fill("tets")
    await page.locator("#signInBtn").click()  ;
    console.log(await page.locator(" [style*='block']").textContent());
    await expect(page.locator("[style*='display']")).toContainText("Incorrect username/password.");

    await userName.fill("")
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await loginButton.click();  
    
  });
  

