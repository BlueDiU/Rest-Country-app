import api from './helpers/restcountries-api.js';
import {App} from './App.js';

document.addEventListener('DOMContentLoaded', App);
console.log(api.ALL, api.BY_NAME);
