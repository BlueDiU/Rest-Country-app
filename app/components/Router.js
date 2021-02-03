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

        let html = '';
        countries.forEach((country) => {
          html += Card(country);
          $main.innerHTML = html;
        });

        // $main.appendChild($fragment);
      },
    });
  }
}
