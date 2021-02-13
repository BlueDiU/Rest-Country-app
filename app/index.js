//import api from './helpers/restcountries-api.js';
import {App} from './App.js';
import {lightMode} from './helpers/lightMode.js';

document.addEventListener('DOMContentLoaded', () => {
  App();
  lightMode('light-mode');
});

window.addEventListener('hashchange', () => {
  App();
});
