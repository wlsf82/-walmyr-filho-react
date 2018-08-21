import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();

$(document).on("scroll", () => {
  $(document).scrollTop() > 100
    ? $("header").addClass("small")
    : $("header").removeClass("small");
});

$("a[href='#top']").click(() => {
  $("html,body").animate({ scrollTop: 0 }, "slow");
  return false;
});

window.onscroll = () => scrollFunction();

function scrollFunction() {
  document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
    ? setDisplayAttributeOfGoToTopButton("block")
    : setDisplayAttributeOfGoToTopButton("none");
}

function setDisplayAttributeOfGoToTopButton(attribute) {
  document.getElementById("go-to-top").style.display = attribute;
}
