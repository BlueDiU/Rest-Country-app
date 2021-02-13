export function lightMode(classLight) {
  const $selectors = document.querySelector('[data-global]');

  const $btnText = document.querySelector('.main-button__text');
  const $btnImg = document.querySelector('.main-button__img');

  let txtDark = 'Dark Mode',
    txtLight = 'Light Mode',
    imgDark = 'app/assets/img/darkMode.svg',
    imgLight = 'app/assets/img/lightMode.svg';

  const ligthMode = () => {
    $selectors.classList.add(classLight);
    $btnText.textContent = txtDark;
    $btnImg.src = imgLight;
    localStorage.setItem('theme', 'light');
  };

  const darkMode = () => {
    $selectors.classList.remove(classLight);
    $btnText.textContent = txtLight;
    $btnImg.src = imgDark;
    localStorage.setItem('theme', 'dark');
  };

  document.addEventListener('click', (e) => {
    if (e.target.matches('.main-button *')) {
      if (e.target.textContent === txtDark) {
        darkMode();
      } else {
        ligthMode();
      }
    }
  });

  if (localStorage.getItem('theme' === null))
    localStorage.setItem('theme', 'dark');

  if (localStorage.getItem('theme') === 'light') ligthMode();

  if (localStorage.getItem('theme') === 'dark') darkMode();
}
