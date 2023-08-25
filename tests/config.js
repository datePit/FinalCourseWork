// node ./tests/config.js
// "type": "module",
/// //////////////////////////////////////////////////////////////////
/// //  Endpoints
/// //////////////////////////////////////////////////////////////////
import { faker } from '@faker-js/faker';

/// /// UI

export let BASE_URL = 'https://www.automationexercise.com'
export let login_URL = 'https://www.automationexercise.com/login'

// (not yet) Already existed user
export let testUserName = 'Auto_Guliver'
export let testFirstName = 'Auto_Alfred'
export let testLastName = 'Auto_Daniels'
export let password = 'AAss22##'



//const { faker } = require('@faker-js/faker');

export const randomName = faker.person.fullName(); // Rowan Nikolaus
export const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
export const randomIDOfGood = faker.helpers.arrayElement(['1', '2', '3', '18', '37'])
// Full list of randomIDOfGood is here https://automationexercise.com/api/productsList
export const randomCountOfSomeGood = faker.number.int({ min: 1, max: 1000 })

// console.log(randomName);
//console.log(randomIDOfGood)
//console.log(randomCountOfSomeGood)