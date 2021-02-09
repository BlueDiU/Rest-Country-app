export function getSelectCountryByName() {
  document.addEventListener('click', (e) => {
    if (!e.target.matches('.country-card__img')) return false;

    const getCountryName = e.target.getAttribute('data-name');
    //document.querySelector('.main-section').style.display = 'none';

    localStorage.setItem('selectCountry', getCountryName);

    location.href = `#/details/${getCountryName}`;
  });
}
