export function Loader() {
  const $loader = document.createElement('img');
  $loader.src = 'app/assets/img/';
  $loader.classList.add('loader');

  return $loader;
}
