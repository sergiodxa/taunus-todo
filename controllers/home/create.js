'use strict';

var create = require('../../models/create.js');

module.exports = function (req, res, next) {
  var todo     = req.body.todo;

  var response = create(todo);

  if (req.headers.accept === 'application/json') {
    if (response) res.json(response);
    else res.status(400).json({ error: 'No se recibió ningún TODO' });
  } else {
    if (response) res.redirect('/');
    else res.redirect('/', 400);
  }
}
