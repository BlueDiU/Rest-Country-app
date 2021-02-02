export function Select() {
  const $select = document.createElement('select');
  $select.name = 'region';
  $select.classList.add('main-select');

  $select.innerHTML = `
    <option value="default">Filter by Region</option>
    <option value="africa">Africa</option>
    <option value="america">America</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
  `;

  return $select;
}
