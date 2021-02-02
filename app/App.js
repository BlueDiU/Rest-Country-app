import {Header} from './components/Header.js';
import {Loader} from './components/Loader.js';
import {Section} from './components/Section.js';

export function App() {
  const $root = document.getElementById('root');

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Section());
  //$root.appendChild(Loader());
}
