export function Select() {
  const $select = document.createElement('select');
  $select.name = 'region';
  $select.classList.add('main-select');

  $select.innerHTML = `
    <option class="main-select__option" value="default">Filter by Region</option>
    <option class="main-select__option" value="africa">Africa</option>
    <option class="main-select__option" value="americas">Americas</option>
    <option class="main-select__option" value="asia">Asia</option>
    <option class="main-select__option" value="europe">Europe</option>
    <option class="main-select__option" value="oceania">Oceania</option>
  `;

  document.addEventListener('change', (e) => {
    if (!e.target.matches('.main-select')) return false;

    localStorage.setItem('searchRegion', e.target.value);

    location.hash = `#/filter?region=${e.target.value}`;

    console.log(e.target.value);
  });

  return $select;
}
