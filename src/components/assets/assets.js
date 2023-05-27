// assets/index.js

const images = {};

function importAll(r) {
  r.keys().forEach((key) => (images[key] = r(key)));
}

importAll(require.context('.', true, /\.(png|jpe?g|svg)$/));

export default images;