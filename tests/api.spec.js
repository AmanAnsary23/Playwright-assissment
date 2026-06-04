const { test, expect, request } = require('@playwright/test');

test('Login API Test', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      username: 'standard_user',
      password: 'secret_sauce'
    }
  });

 
  expect(response.status()).toBe(201);

  
  const body = await response.json();
  expect(body.username).toBe('standard_user');

  console.log('Login API Status:', response.status());
  console.log('Login API Body:', body);
});

test('Get Products API Test', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts');

  
  expect(response.status()).toBe(200);

 
  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);

  console.log('Products Status:', response.status());
  console.log('Total Products:', body.length);
});
