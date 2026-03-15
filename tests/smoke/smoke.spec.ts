import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {

  test('1. Home Page Load', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('2. User Login', async ({ page }) => {
    await page.goto('/users/login');
    await page.fill('#email', 'test.nilanjan.deb@gmail.com');
    await page.fill('#password', '123456');
    await page.click('button[type="submit"]');

    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('Successfully Logged In');
  });

  test('3. Catalog Load', async ({ page }) => {
    await page.goto('/books');
    
    const bookDetailsButton = page.locator('text=Book Details').first();
    await expect(bookDetailsButton).toBeVisible();
  });

  test('4. Catalog API Endpoint', async ({ request }) => {
    const response = await request.get('/books');
    expect(response.status()).toBe(200);
  });

  test('5. Add Book to Cart', async ({ page }) => {
    await page.goto('/users/login');
    await page.fill('#email', 'test.nilanjan.deb@gmail.com');
    await page.fill('#password', '123456');
    await page.click('button[type="submit"]');
    await expect(page.locator('.alert-success')).toBeVisible();

    await page.goto('/books');
    await page.click('text=Book Details');
    await page.click('text=Go to Cart');

    await page.goto('/users/dashboard');
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
  });

  test('6. Admin Panel Access', async ({ page, request }) => {

    await page.goto('/users/login');
    await page.fill('#email', 'nilanjan172nsvian@gmail.com');
    await page.fill('#password', 'nil1729');
    await page.click('button[type="submit"]');
    await expect(page.locator('.alert-success')).toBeVisible();

    const response = await page.goto('/users/dashboard');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveURL(/.*dashboard/);
  });

});
