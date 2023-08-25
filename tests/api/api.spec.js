// node ./tests/api/api.spec.js
/* 
import { randomName } from './config.js'
import { randomEmail } from './config.js'
 */

import {
  BASE_URL, testUserName, testFirstName, testLastName, password
} from '../config.js'
import { randomIDOfGood } from '../config.js'
import { randomCountOfSomeGood } from '../config.js'

test ('Product List page is OK', async () => {
  const response = await fetch(`${BASE_URL}/api/productsList`, {
    method: 'GET', body: null
  });

  expect(response.status).toBe(200);
  // expect(response.body).toContain()
});

test ('Brand List page is OK', async () => {
  const response = await fetch(`${BASE_URL}/api/brandsList`, {
    method: 'GET', body: null
  });

  expect(response.status).toBe(200);
  // expect(response.body).toContain()
});

test ('Goods searching', async () => {
  const response = await fetch(`${BASE_URL}/api/searchProduct`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "search": "Blue Top"
    })
  });

  expect(response.status).toBe(200);
  // expect(response.body).toContain()
});

test ('Adding some numbers of some good to cart', async () => {
  const response = await fetch(`${BASE_URL}/add_to_cart/${randomIDOfGood}?quantity=${randomCountOfSomeGood}`, {
    method: 'GET', body: null
  });
  // console.log(randomIDOfGood);
  // console.log(randomCountOfSomeGood);
  // console.log(response.status);
  expect(response.status).toBe(200);
  // expect(response.body).toContain()
});