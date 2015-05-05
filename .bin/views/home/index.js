var jade = require("jadum/runtime");
module.exports = function index(locals) {
var jade_debug = [{ lineno: 1, filename: "views/home/index.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (list, title, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/home/index.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/home/index.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/home/index.jade" });
buf.push("<h1>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/create\" method=\"POST\" class=\"form-create-todo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/home/index.jade" });
buf.push("<input type=\"text\" placeholder=\"¿Qué te queda por hacer?\" name=\"todo\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</header>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/home/index.jade" });
buf.push("<section>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/home/index.jade" });
// iterate list
;(function(){
  var $$local = locals["task"];
  var $$obj = list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var task = locals["task"] = $$obj[$index];

jade_debug.unshift({ lineno: 8, filename: "views/home/index.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/home/index.jade" });
buf.push("<article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/update/\" method=\"POST\" class=\"form-change-status\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"_id\"" + (jade.attr("value", task._id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"todo\"" + (jade.attr("value", task.todo, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/home/index.jade" });
buf.push("<input type=\"checkbox\" name=\"status\"" + (jade.attr("checked", task.status, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/update/\" method=\"POST\" class=\"form-change-todo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"_id\"" + (jade.attr("value", task._id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/home/index.jade" });
if ( (task.status))
{
jade_debug.unshift({ lineno: 19, filename: "views/home/index.jade" });
jade_debug.unshift({ lineno: 19, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"status\" value=\"true\"/>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 21, filename: "views/home/index.jade" });
jade_debug.unshift({ lineno: 21, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"status\" value=\"false\"/>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/home/index.jade" });
buf.push("<input type=\"text\" name=\"todo\"" + (jade.attr("value", task.todo, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\" class=\"fa fa-pencil\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/delete\" method=\"POST\" class=\"form-delete-todo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"_id\"" + (jade.attr("value", task._id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\" class=\"fa fa-close\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var task = locals["task"] = $$obj[$index];

jade_debug.unshift({ lineno: 8, filename: "views/home/index.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/home/index.jade" });
buf.push("<article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/update/\" method=\"POST\" class=\"form-change-status\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"_id\"" + (jade.attr("value", task._id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"todo\"" + (jade.attr("value", task.todo, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/home/index.jade" });
buf.push("<input type=\"checkbox\" name=\"status\"" + (jade.attr("checked", task.status, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/update/\" method=\"POST\" class=\"form-change-todo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"_id\"" + (jade.attr("value", task._id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/home/index.jade" });
if ( (task.status))
{
jade_debug.unshift({ lineno: 19, filename: "views/home/index.jade" });
jade_debug.unshift({ lineno: 19, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"status\" value=\"true\"/>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 21, filename: "views/home/index.jade" });
jade_debug.unshift({ lineno: 21, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"status\" value=\"false\"/>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/home/index.jade" });
buf.push("<input type=\"text\" name=\"todo\"" + (jade.attr("value", task.todo, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\" class=\"fa fa-pencil\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/delete\" method=\"POST\" class=\"form-delete-todo\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"_id\"" + (jade.attr("value", task._id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\" class=\"fa fa-close\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
    }

  locals["task"] = $$local;
  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/home/index.jade" });
buf.push("<template id=\"task-tplt\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "views/home/index.jade" });
buf.push("<article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/update/\" method=\"POST\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"_id\" value=\"{{_id}}\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"todo\" value=\"{{todo}}\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/home/index.jade" });
buf.push("<input type=\"checkbox\" name=\"status\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.unshift({ lineno: 37, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/update/\" method=\"POST\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"_id\" value=\"{{_id}}\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"status\" value=\"false\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/home/index.jade" });
buf.push("<input type=\"text\" name=\"todo\" value=\"{{todo}}\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\" class=\"fa fa-pencil\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "views/home/index.jade" });
buf.push("<form action=\"/todo/delete\" method=\"POST\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: "views/home/index.jade" });
buf.push("<input type=\"hidden\" name=\"_id\" value=\"{{_id}}\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\" class=\"fa fa-close\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
buf.push("</template>");
jade_debug.shift();
jade_debug.shift();}.call(this,"list" in locals_for_with?locals_for_with.list:typeof list!=="undefined"?list:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  h1=title\n\n  form(action=\"/todo/create\", method=\"POST\").form-create-todo\n    input(type=\"text\", placeholder=\"¿Qué te queda por hacer?\", name=\"todo\")\n\nsection\n  each task in list\n    article\n      form(action=\"/todo/update/\", method=\"POST\").form-change-status\n        input(type=\"hidden\", name=\"_id\", value=task._id)\n        input(type=\"hidden\", name=\"todo\", value=task.todo)\n        input(type=\"checkbox\", name=\"status\", checked=task.status)\n        button(type=\"submit\")\n\n      form(action=\"/todo/update/\", method=\"POST\").form-change-todo\n        input(type=\"hidden\", name=\"_id\", value=task._id)\n        if (task.status)\n          input(type=\"hidden\", name=\"status\", value=\"true\")\n        else\n          input(type=\"hidden\", name=\"status\", value=\"false\")\n        input(type=\"text\", name=\"todo\", value=task.todo)\n        button(type=\"submit\").fa.fa-pencil\n\n      form(action=\"/todo/delete\", method=\"POST\").form-delete-todo\n        input(type=\"hidden\", name=\"_id\", value=task._id)\n        button(type=\"submit\").fa.fa-close\n\ntemplate#task-tplt\n  article\n    form(action=\"/todo/update/\", method=\"POST\")\n      input(type=\"hidden\", name=\"_id\", value=\"{{_id}}\")\n      input(type=\"hidden\", name=\"todo\", value=\"{{todo}}\")\n      input(type=\"checkbox\", name=\"status\")\n      button(type=\"submit\")\n\n    form(action=\"/todo/update/\", method=\"POST\")\n      input(type=\"hidden\", name=\"_id\", value=\"{{_id}}\")\n      input(type=\"hidden\", name=\"status\", value=\"false\")\n      input(type=\"text\", name=\"todo\", value=\"{{todo}}\")\n      button(type=\"submit\").fa.fa-pencil\n\n    form(action=\"/todo/delete\", method=\"POST\")\n      input(type=\"hidden\", name=\"_id\", value=\"{{_id}}\")\n      button(type=\"submit\").fa.fa-close");
}
}