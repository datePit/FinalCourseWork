// node ./tests/e2e/ui.spec.js

import {
    BASE_URL, testUserName, testFirstName, testLastName, password
} from '../config.js'
import { randomIDOfGood } from '../config.js'
import { randomCountOfSomeGood } from '../config.js'

const { test, expect } = require('@playwright/test')
const { faker } = require('@faker-js/faker');

test('The cart is empty without adding the goods', async ({ page }) => {
  await page.goto(`${BASE_URL}/view_cart`);
  const attentionText = await page.getByText('Cart is empty!');
  await expect (attentionText).toBeVisible();
});

test('adding the good to cart', async ({ page }) => {
  await page.goto(`${BASE_URL}/product_details/${randomIDOfGood}`);

  const addGoodButton = await page.getByRole('button', { name: 'Add to cart' });
  await expect (addGoodButton).toBeVisible();

  addGoodButton.click();

  const addedMessage1 = await page.getByRole('heading', { name: 'Added!' });
  await expect (addedMessage1).toBeVisible();

  const addedMessage2 = await page.getByText('Your product has been added to cart.');
  await expect (addedMessage2).toBeVisible();
});


test('checkout message when there is a trying to preceed', async ({ page }) => {
  await page.goto(`${BASE_URL}/product_details/${randomIDOfGood}`);
  await page.getByRole('button', { name: 'Add to cart' }).click();

  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: 'Cart' }).click();

  const checkOutButton = await page.getByText('Proceed To Checkout');
  await expect (checkOutButton).toBeVisible();

  checkOutButton.click();

  const checkoutAttention1 = await page.getByRole('heading', { name: 'Checkout' });
  await expect (checkoutAttention1).toBeVisible();

  const checkoutAttention2 = await page.getByText('Register / Login account to proceed on checkout.');
  await expect (checkoutAttention2).toBeVisible();
});

test('contact page has registration fields', async ({ page }) => {
  await page.goto(`${BASE_URL}/contact_us`);

  const name = await page.getByPlaceholder('Name');
  await expect(name).toBeVisible();

  const email = await page.getByPlaceholder('Email', { exact: true });
  await expect(email).toBeVisible();

  const Subject = await page.getByPlaceholder('Subject');
  await expect(Subject).toBeVisible();

  const message = await page.getByPlaceholder('Your Message Here');
  await expect(message).toBeVisible();

  const loadFileButton = await page.locator('input[name="upload_file"]');
  await expect(loadFileButton).toBeVisible();
});

test('subscription form dislays field', async ({ page }) => {
  await page.goto(`${BASE_URL}`);

  const title = await page.getByRole('heading', { name: 'Subscription' });
  await expect (title).toBeVisible();

  const placeholder = await page.getByPlaceholder('Your email address');
  await expect (placeholder).toBeVisible();
  await expect (placeholder).toHaveAttribute('type', 'email');
  await expect (placeholder).toHaveAttribute('id', 'susbscribe_email');
});
