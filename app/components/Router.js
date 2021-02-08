import {ajax} from '../helpers/ajax.js';
import api from '../helpers/restcountries-api.js';
import {Card} from './Card.js';

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById('main');

  let {hash} = location;

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
  }

  d.querySelector('.loader').style.display = 'none';
}
