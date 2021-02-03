export function Card(props) {
  let {flag, name, population, capital, region} = props;

  return `
    <article>
        <img src="${flag}" alt="${name.toLowerCase()}">
        <div class="country-data">
            <h2 class="country-data__title">${name}</h2>

           <div class="country-info">
              <span class="country-info__text">Population:</span> ${population} 
              <span class="country-info__text">Region:</span> ${region}
              <span class="country-info__text">Capital:</span> ${capital}
           </div>
        </div>
    </article>
    `;
}
