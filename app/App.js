import {Header} from './components/Header.js';

export function App() {
  const $root = document.getElementById('root');

  $root.innerHTML = null;
  $root.appendChild(Header());
}
