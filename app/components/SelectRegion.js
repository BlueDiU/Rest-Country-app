export function Select() {
  const $select = document.createElement('select');
  $select.name = 'region';
  $select.classList.add('main-select');

  $select.innerHTML = `
    <option class="main-select__option" value="default">Filter by Region</option>
    <option class="main-select__option" value="africa">Africa</option>
    <option class="main-select__option" value="america">America</option>
    <option class="main-select__option" value="asia">Asia</option>
    <option class="main-select__option" value="europe">Europe</option>
    <option class="main-select__option" value="oceania">Oceania</option>
  `;

  return $select;
}
