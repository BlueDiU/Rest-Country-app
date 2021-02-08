export function Header() {
  const $header = document.createElement('header');
  $header.classList.add('main-header');

  $header.innerHTML = `
  <h1 class="main-header__title">Where in the world?</h1>
  <button class="main-button">
    <img
      class="main-button__img"
      src="app/assets/img/1415431.svg"
      alt="theme"
    />
    <span class="main-button__text">Dark Mode</span>
  </button>
  `;

  document.addEventListener('click', (e) => {
    if (e.target.matches('.main-header__title')) {
      location.hash = '';
    }
  });

  return $header;
}
