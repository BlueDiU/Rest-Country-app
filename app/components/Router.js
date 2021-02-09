import api from '../helpers/restcountries-api.js';
import {ajax} from '../helpers/ajax.js';
import {Card} from './Card.js';
import {getSelectCountryByName} from '../helpers/getSelectCountryByName.js';
import {Details} from './Details.js';

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById('main');

  let {hash} = location;

  // get select country by data-name
  getSelectCountryByName();

  if (!hash || hash === '/#') {
    await ajax({
      url: api.ALL,
      cbSuccess: (countries) => {
        const $fragment = document.createDocumentFragment();

        countries.forEach((country) => {
          $fragment.appendChild(Card(country));
        });

        $main.appendChild($fragment);
      },
    });
  } else if (hash.includes('#/search')) {
    let query = localStorage.getItem('seachCountry');

    if (!query) {
      d.querySelector('.loader').style.display = 'none';
      return false;
    }

    await ajax({
      url: `${api.BY_NAME}${query}`,
      cbSuccess: (search) => {
        const $fragment = document.createDocumentFragment();

        search.forEach((name) => {
          $fragment.appendChild(Card(name));
        });

        $main.appendChild($fragment);
      },
    });
  } else if (hash.includes('#/filter')) {
    let query = localStorage.getItem('searchRegion');

    if (!query) {
      d.querySelector('.loader').style.display = 'none';
      return false;
    }

    await ajax({
      url: `${api.BY_REGION}${query}`,
      cbSuccess: (filter) => {
        const $fragment = document.createDocumentFragment();

        filter.forEach((name) => {
          $fragment.appendChild(Card(name));
        });

        $main.appendChild($fragment);
      },
    });
  } else {
    let query = localStorage.getItem('selectCountry');

    console.log(query);

    await ajax({
      url: `${api.BY_NAME}${query}`,
      cbSuccess: (details) => {
        console.log(details);
        $main.innerHTML = Details(details[0]);
      },
    });
  }

  d.querySelector('.loader').style.display = 'none';
}
