import {test, expect} from '@playwright/test';

const baseUrl = 'http://localhost:5050';

test('GET /books should return a list of books', async ({ request }) => {
    const response = await request.get(`${baseUrl}/books`);
    
    expect(response.status()).toBe(200);
    const bodyText = await response.text();
    expect(bodyText).toContain('<!DOCTYPE html>');
    expect(bodyText).toContain('Book Store');
});

test('GET invalid endpoint should return a 404', async ({ request }) => {
    const response = await request.get(`${baseUrl}/books/invalid`);
    
    expect(response.status()).toBe(404);
});

test('POST /login with valid user returns success', async ({ request }) => {
    const response = await request.post(`${baseUrl}/users/login`, {
        data: {
            email: 'test.nilanjan.deb@gmail.com',
            password: '123456'
        },
        maxRedirects: 0
    });
    
    expect(response.status()).toBe(302);

    const headers = response.headers();
    expect(headers['location']).toBe('/books');

    expect(headers['set-cookie']).toBeDefined();
    expect(headers['set-cookie']).toContain('connect.sid');
});