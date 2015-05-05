'use strict';

var diskdb = require('diskdb');
var path   = require('path');

var db = diskdb.connect(path.join(__dirname, '..', 'db'), ['todos']);

module.exports = function update (id, todo) {
  return db.todos.update({ _id: id }, todo);
}
