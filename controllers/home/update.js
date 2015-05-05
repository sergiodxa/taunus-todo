'use strict';

var update = require('../../models/update.js');

module.exports = function (req, res, next) {
  var id       = req.body._id;
  var status   = req.body.status;
  var todo     = req.body.todo;

  if (status === undefined || status === false) status = true;
  else status = false;

  var response = update(id, {
    status: status,
    todo: todo
  });

  if (req.headers.accept === 'application/json') {
    if (response) res.json(response);
    else res.status(400).json({ error: 'Hubo un error en la solicitud.' });
  } else {
    if (response) res.redirect('/');
    else res.redirect('/', 400);
  }
}
