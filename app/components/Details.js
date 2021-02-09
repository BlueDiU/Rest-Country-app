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
  <article class="details-card container">
    <img src="${flag}" alt="${name.toLowerCase()}  class="details-card__img">

    <section class="details-container">
        <h3 class="details-container__name">${name}</h3>

        <div class="details-info__group-1">
            <p class="details-info__text">
                <span class="details-info__bold">Native Name:</span> ${nativeName}
            </p> 
            <p class="details-info__text">
                <span class="details-info__bold">Population:</span> ${population}
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
        </div>
    </section>
  </article>
  `;
}
