'use strict';

var remove = require('../../models/remove.js');

module.exports = function (req, res, next) {
  var id       = req.body._id;

  var response = remove(id);

  if (response) {
    res.redirect('/');
  } else {
    res.redirect('/', 401);
  }
}
