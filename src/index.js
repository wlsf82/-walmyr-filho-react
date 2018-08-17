import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

import "./index.css";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}

registerServiceWorker();

$(document).on("scroll", () => {
    $(document).scrollTop() > 100 ?
        $("header").removeClass("large").addClass("small") :
        $("header").removeClass("small").addClass("large");
});

$("a[href='#top']").click(() => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
   return false;
});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ?
        document.getElementById("go-to-top").style.display = "block" :
        document.getElementById("go-to-top").style.display = "none";
}

if(module.hot) {
  module.hot.accept();
}
