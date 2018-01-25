module.exports = function (engine, scenario, viewport) {
    engine.evaluate(() => {
        // Your web-app is now loaded. Edit here to simulate user interactions or other state changes in the browser window context.
    });
    console.log("onReady.js has run for: ", viewport.label); // eslint-disable-line no-console
};
