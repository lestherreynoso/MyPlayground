var server = require("./core/server");
var router = require("./core/router");
var requestHandlers = require("./core/requestHandlers");

var handle = {}
// handle[""] = requestHandlers.start;
// handle["start"] = requestHandlers.start;
// handle["upload"] = requestHandlers.upload;

handle["css"] = "text/css"
handle["js"] = "text/javascript"
handle["html"] = "text/html"
handle[""] = "text/html"
handle["png"] = "image/png"
handle["docx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
handle["pdf"] = "application/pdf"
handle["xml"] = "applicaiton/xml"
handle["ico"] = "image/x-icon"
handle["ttf"] = "application/x-font-ttf"
 
server.start(router.route, handle);