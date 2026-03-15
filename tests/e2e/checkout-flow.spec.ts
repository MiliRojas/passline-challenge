import {test, expect} from '@playwright/test';

test('user can login, and add book to cart and complete checkout', async ({page}) => {
   
    const stripeFrame = page.frameLocator('iframe[src*="stripe"]');

    await page.goto('http://localhost:5050/users/login');

    await page.fill('#email', 'test.nilanjan.deb@gmail.com');
    await page.fill('#password', '123456');
    await page.click('button[type="submit"]');

    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('Successfully Logged In');

    await page.click('text=Book Details');

    await page.click('text=Add To Cart');

    await page.goto('http://localhost:5050/users/dashboard');
    await expect(page.locator('text=Checkout')).toBeVisible();
    await page.click('text=Checkout');

    await expect(page.locator('#exampleModalCenterTitle')).toBeVisible();
    await page.click('text=Go To Checkout');

    await expect(page.locator('Your Checkout Summary')).toBeVisible();
    await page.click('text=Pay with Card');

    await page.fill('#email', 'test.nilanjan.deb@gmail.com');
    await page.fill('#card_number', '4242 4242 4242 4242');
    await page.fill('#cc-exp', '12/32');
    await page.fill('#cc-csc', '123');
    await stripeFrame.locator('#submitButton').click();
    await expect(page).toHaveURL(/users\/order/); 
    
})