import {test, expect} from '@playwright/test';

test('user can login, and add book to cart and complete checkout', async ({page}) => {
   
    const checkoutButton = page.getByRole('button', { name: 'Checkout' });

    await page.goto('http://localhost:5050/users/login');

    await page.fill('#email', 'test.nilanjan.deb@gmail.com');
    await page.fill('#password', '123456');
    await page.click('button[type="submit"]');

    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('Successfully Logged In');

    await page.click('text=Book Details');

    if (await page.locator('text=Add To Cart').isVisible()) {
        await page.click('text=Add To Cart');
    } else {
        await page.click('text=Go to Cart');
    }

    await page.goto('/users/dashboard');
    await expect(checkoutButton).toBeVisible();
    await checkoutButton.click();

    await expect(page.locator('#exampleModalCenterTitle')).toBeVisible();
    await page.click('text=Go To Checkout');

    await expect(page.getByText('Your Checkout Summary')).toBeVisible();
    await page.getByRole('button', { name: 'Pay with Card' }).click();

    await expect(page.locator('iframe[src*="stripe"]')).toBeVisible();
    
})