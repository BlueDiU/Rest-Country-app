import {populationFormat} from '../helpers/populationFormat.js';

export function Details(props) {
  let {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies, // object
    languages, // object
    borders, // array
  } = props;

  // get list language of Array languages
  let langName = '';

  for (let i = 0; i < languages.length; i++) {
    langName += `${languages[i].name}${languages[i] ? ' ' : ''}`;
  }

  return `
  <a class="back-btn" href="#">&larr; Back</a>
  
  <article class="details-card">
    <img class="details-card__img" src="${flag}" alt="${name.toLowerCase()}/>

    <section class="details-info">
        <h3 class="details-info__name">${name}</h3>

        <div class="details-info__group-1">
            <p class="details-info__text">
              <span class="details-info__bold">Native Name:</span> ${nativeName}
            </p> 
            <p class="details-info__text">
              <span class="details-info__bold">Population:</span> ${populationFormat(
                population.toString()
              )}
            </p> 
            <p class="details-info__text">
              <span class="details-info__bold">Region:</span> ${region}
            </p> 
            <p class="details-info__text">
              <span class="details-info__bold">Sub Region:</span> ${subregion}
            </p> 
            <p class="details-info__text">
              <span class="details-info__bold">Capital:</span> ${capital}
            </p> 
        </div>

        <div class="details-info__group-2">
            <p class="details-info__text">
                <span class="details-info__bold">Top Level Domain:</span> ${
                  topLevelDomain[0]
                }
            </p> 
            <p class="details-info__text">
                <span class="details-info__bold">Currencies:</span> ${
                  currencies[0].name
                }
            </p> 
            <p class="details-info__text">
                <span class="details-info__bold">Languages:</span> 
               ${langName.trimEnd().replaceAll(' ', ', ')}
            </p> 
        </div>

        <div class="details-info__group-3">
          <h5 class="group-3__title">Border Countries: </h5>
          <div class="group-3__container">
              <div class="group-3__box">
                ${borders.length > 0 ? borders[0] : '❌'}
              </div>

              <div class="group-3__box">
              ${borders.length > 0 ? borders[1] : '❌'}
              </div>

              <div class="group-3__box">
              ${borders.length > 0 ? (borders[2] ? borders[2] : '❌') : '❌'}
              </div>
          </div>
        </div>

    </section>
  </article>
  `;
}
