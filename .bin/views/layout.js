var jade = require("jadum/runtime");
module.exports = function layout(locals) {
var jade_debug = [{ lineno: 1, filename: "views/layout.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (model, partial) {
jade_debug.unshift({ lineno: 0, filename: "views/layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/layout.jade" });
buf.push("<title>" + (jade.escape(null == (jade_interp = model.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"./css/style.css\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"//fonts.googleapis.com/css?family=Roboto\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/layout.jade" });
buf.push("<main id=\"app\">" + (null == (jade_interp = partial) ? "" : jade_interp));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/layout.jade" });
buf.push("<script src=\"/js/main.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();}.call(this,"model" in locals_for_with?locals_for_with.model:typeof model!=="undefined"?model:undefined,"partial" in locals_for_with?locals_for_with.partial:typeof partial!=="undefined"?partial:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "title=model.title\nlink(rel=\"stylesheet\", href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css\")\nlink(rel=\"stylesheet\", href=\"./css/style.css\")\nlink(rel=\"stylesheet\", href=\"//fonts.googleapis.com/css?family=Roboto\")\nmain#app!=partial\nscript(src=\"/js/main.js\")");
}
}