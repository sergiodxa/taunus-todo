'use strict';

var find = require('../../models/find.js');

module.exports = function (req, res, next) {
  var todos     = find();

  res.viewModel = {
    model: {
      title: 'Taunus TODO',
      list: todos
    }
  };

  next();
}
