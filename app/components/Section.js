import {SearchForm} from './SearchForm.js';
import {Select} from './SelectRegion.js';

export function Section() {
  const $section = document.createElement('section');
  $section.classList.add('main-section');
  $section.classList.add('container');

  $section.appendChild(SearchForm());
  $section.appendChild(Select());

  return $section;
}
