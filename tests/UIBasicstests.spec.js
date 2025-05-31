import { test, expect } from '@playwright/test';

test('ui Controls test', async ({  page}) => {
    const userName= page.locator("#username");
    const password= page.locator("#password");
    const loginButton = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a")

    
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
    
   // await page.locator(".card-body a ").nth(0).textContent();
   //dyanamic wait until all the network are loaded
    await page.waitForLoadState("networkidle");
    await cardTitles.first().waitFor();

    const allTitles = await cardTitles.allTextContents();
   
  console.log(allTitles);
    
  });

  test('assertions for radioButtons', async ({  page}) => {
    const userName= page.locator("#username");
    const password= page.locator("#password");
    const loginButton = page.locator("#signInBtn");
    const radioButton = page.locator(".checkmark")
    const dropDown = page.locator("select.form-control")

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await radioButton.last().click();
    await page.locator("#okayBtn").click();
    expect(radioButton.last()).toBeChecked();
    await dropDown.selectOption("Teacher");
    await page.locator("#terms").click();
    await expect (page.locator("#terms")).toBeChecked();

    await loginButton.click();

   
    
    
  });
  

