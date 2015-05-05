'use strict';

var taunus = require('taunus');
var wiring = require('../../.bin/wiring.js');

var app    = document.getElementsByTagName('main')[0];

var config = {
  cache: true,
  prefetch: true
};

taunus.mount(app, wiring, config);
