export async function ajax(props) {
  let {url, cbSuccess} = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText ?? 'Occurred an error to access to API';

      document.getElementById('main').innerHTML = `
      <div class="error">
        <p>Error: ${err.status}: ${message}</p>
      <div>
     `;

      console.error(err);
    });
}
