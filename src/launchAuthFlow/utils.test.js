console.log('Utils');
const url = require('url');

var u1 ="http://localhost:8080/?code=A2jpwzbc6AbOMbL9YBe34MfgO1YMmTya9KWAqG3x5oVBV_ZUC86mSV1pOZVpCZlsOVv2N4UO2R1d6nlF5F9N3X1IkEhG3nClyhpjWLBFWHvuRp3c5P_TS-xpV_ooi7g-_TD7_zdC1901RiecEo2ke7j3UYj0h30rQ-72pi3hBLBXmqMIs6sMa6pgdn8&state=http%3A%2F%2Flocalhost%3A8080%2F#";
console.log(u1);

var u =  url.parse(u1);
console.log(u);
