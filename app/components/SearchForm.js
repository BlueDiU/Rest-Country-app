export function SearchForm() {
  const $form = document.createElement('form'),
    $input = document.createElement('input');
  // form
  $form.classList.add('main-form');
  $input.classList.add('main-form-search');
  // input
  $input.placeholder = 'Search for a country... ';
  $input.type = 'search';

  $form.appendChild($input);

  return $form;
}
