export function SearchForm() {
  const $form = document.createElement('form'),
    $input = document.createElement('input');
  // form
  $form.classList.add('main-form');
  $input.classList.add('main-form__search');
  // input
  $input.placeholder = '🔍 Search for a country... ';
  $input.type = 'search';
  $input.name = 'search';
  $input.autocomplete = 'off';

  $form.appendChild($input);

  if (location.hash.includes('#/search'))
    $input.value = localStorage.getItem('seachCountry');

  document.addEventListener('search', (e) => {
    if (!e.target.matches('input[type="search"]')) return false;

    if (!e.target.value) localStorage.removeItem('seachCountry');
  });

  document.addEventListener('submit', (e) => {
    if (!e.target.matches('.main-form')) return false;
    e.preventDefault();

    if (e.target.search.value === '') {
      location.hash = '';
      return true;
    }

    localStorage.setItem(
      'seachCountry',
      e.target.search.value.toLowerCase().trim()
    );

    location.hash = `#/search?search=${e.target.search.value
      .toLowerCase()
      .trim()}`;
  });

  return $form;
}
