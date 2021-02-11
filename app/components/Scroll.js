export function Scroll() {
  const $scrollBtn = document.createElement('button');
  $scrollBtn.classList.add('scroll-top-btn');
  $scrollBtn.classList.add('hidden');
  $scrollBtn.innerHTML = '&#11014;';

  window.addEventListener('scroll', (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 600) {
      $scrollBtn.classList.remove('hidden');
    } else {
      $scrollBtn.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.matches('.scroll-top-btn')) {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  });

  return $scrollBtn;
}
