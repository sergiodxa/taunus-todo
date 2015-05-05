'use strict';

var diskdb = require('diskdb');
var path = require('path');

var db = diskdb.connect(path.join(__dirname, '..', 'db'), ['todos']);

module.exports = function create (todo) {
  if (!todo) {
    return false;
  }

  return db.todos.save({
    todo: todo
  });
}
