//import api from './helpers/restcountries-api.js';
import {App} from './App.js';

document.addEventListener('DOMContentLoaded', App);

window.addEventListener('hashchange', () => {
  App();
});
