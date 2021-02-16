export function getSelectCountryByName() {
  document.addEventListener('click', (e) => {
    if (!e.target.matches('.country-card__img')) return false;

    const getCountryName = e.target.getAttribute('data-name');

    localStorage.setItem('selectCountry', getCountryName);

    location.href = `#/details/${getCountryName}`;
  });
}
