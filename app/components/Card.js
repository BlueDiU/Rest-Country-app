import {populationFormat} from '../helpers/populationFormat.js';

export function Card(props) {
  let {flag, name, population, capital, region} = props;

  const $article = document.createElement('article');
  $article.classList.add('country-card');

  $article.innerHTML = `
  <img class="country-card__img" src="${flag}" alt="${name.toLowerCase()}" 
  data-name="${name}">
 
    <div class="country-card__container">
      <h2 class="country-card__title">${name}</h2>

      <section class="country-info">
          <div class="country-info__text">
            <span class="country-info__bold">Population:</span>
            ${populationFormat(population.toString())} 
          </div> 
          <div class="country-info__text">
            <span class="country-info__bold">Region:</span> ${region}
          </div> 
          <div class="country-info__text">
          <span class="country-info__bold">Capital:</span> ${capital}
          </div> 
      </section>
    </div>
  `;

  return $article;
}
