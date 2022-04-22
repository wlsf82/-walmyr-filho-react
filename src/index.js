import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();

const goToTopButton = document.getElementById("go-to-top");

goToTopButton.onclick = () => goToTop();

document.querySelector('h1').onclick = () => goToTop();

function goToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onscroll = () => {
  document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
    ? goToTopButton.style.display = "block"
    : goToTopButton.style.display = "none"
}
