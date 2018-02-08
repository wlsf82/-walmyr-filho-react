module.exports = function (engine, scenario, viewport) {
    // This script runs before your app loads. Edit here to log-in, load cookies or set other states required for your test.
    console.log(`onBefore.js has run for ${viewport.label}.`); // eslint-disable-line no-console
};
