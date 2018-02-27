import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import "./index.css";
import App from "./App";
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
