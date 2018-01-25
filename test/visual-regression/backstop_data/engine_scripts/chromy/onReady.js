module.exports = function (chromy, scenario) {
    console.log("SCENARIO > " + scenario.label); // eslint-disable-line no-console
    require("./clickAndHoverHelper")(chromy, scenario);
};
