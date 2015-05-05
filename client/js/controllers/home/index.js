'use strict';

var taunus   = require('taunus');
var $        = require('jquery');
var template = require('igatajs');

module.exports = function (model, container, route) {
  var $createTodo  = $('.form-create-todo');
  var changeStatus = '.form-change-status';
  var changeTodo   = '.form-change-todo';
  var deleteTodo   = '.form-delete-todo';

  var $todoList    = $('section');

  // create new todo
  $createTodo.on('submit', function (e) {
    e.preventDefault();

    taunus.xhr({
      json: { todo: this[0].value },
      url: $(this).attr('action'),
      method: 'POST'
    }, function (err, body) {
      if (err) console.log(err);
      else {
        var tplt = template('task-tplt', body);

        $(tplt).appendTo($todoList);
      }
    });
  });

  // change todo status
  $todoList.on('submit', changeStatus, function (e) {
    e.preventDefault();

    var $this           = $(this);

    var $changeTodoForm = $this.parent().find('.form-change-todo');

    var _id             = $this.find('[name="_id"]').val();
    var todo            = $this.find('[name="todo"]').val();
    var status          = $this.find('[name="status"]').is(':checked');

    taunus.xhr({
      json: {
        _id: _id,
        todo: todo,
        status: status
      },
      url: $this.attr('action'),
      method: 'POST'
    }, function (err, body) {
      if (err) console.log(err);
      else {
        var $statusInput  = $this.find('[name="status"]');
        var $statusInput2 = $changeTodoForm.find('[name="status"]');

        if (status) {
          console.log(true);
          $statusInput.prop('checked', false);
          $statusInput2.val("false");
        } else {
          console.log(false);
          $statusInput.prop('checked', true);
          $statusInput2.val("true");
        }
      }
    });
  });

  // change todo name
  $todoList.on('submit', changeTodo, function (e) {
    e.preventDefault();

    var $this  = $(this);

    var _id    = $this.find('[name="_id"]').val();
    var status = $this.find('[name="status"]').val();
    var todo   = $this.find('[name="todo"]').val();

    status     = (status === 'true') ? false : true;

    taunus.xhr({
      json: {
        _id: _id,
        todo: todo,
        status: status
      },
      url: $this.attr('action'),
      method: 'POST'
    }, function (err, body) {
      if (err) console.log(err);
      else console.log(body);
    });
  });

  // delete todo
  $todoList.on('submit', deleteTodo, function (e) {
    e.preventDefault();

    var $this = $(this);
    var _id   = $this.find('[name="_id"]').val();

    taunus.xhr({
      json: {
        _id: _id
      },
      url: $(this).attr('action'),
      method: 'POST'
    }, function (err, body) {
      if (err) console.log(err);
      else $this.parent().remove();
    });
  });
}
