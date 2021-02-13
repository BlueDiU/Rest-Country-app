export function Header() {
  const $header = document.createElement('header');
  $header.classList.add('main-header');

  const imgDark = 'app/assets/img/darkMode.svg';
  const imgLight = 'app/assets/img/lightMode.svg';

  let txtDark = 'Dark Mode',
    txtLight = 'Light Mode';

  $header.innerHTML = `
  <h1 class="main-header__title">Where in the world?</h1>
  <button class="main-button">
    <img
      class="main-button__img"
      src="${imgLight || imgDark}"
      alt="theme"
    />
    <span class="main-button__text">${txtDark || txtLight}</span>
  </button>
  `;

  document.addEventListener('click', (e) => {
    if (e.target.matches('.main-header__title')) {
      location.hash = '';
    }
  });

  return $header;
}
