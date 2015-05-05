'use strict';

var diskdb = require('diskdb');
var path   = require('path');

var db = diskdb.connect(path.join(__dirname, '..', 'db'), ['todos']);

module.exports = function remove (id) {
  return db.todos.remove({ _id: id });
}
