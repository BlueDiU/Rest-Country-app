import {Header} from './components/Header.js';
import {Loader} from './components/Loader.js';
import {Main} from './components/Main.js';
import {Router} from './components/Router.js';
import {Scroll} from './components/Scroll.js';
import {Section} from './components/Section.js';

export function App() {
  const $root = document.getElementById('root');

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Section());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  $root.appendChild(Scroll());

  Router();
}
