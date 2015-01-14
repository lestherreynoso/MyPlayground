var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;

		// pathname in the form of "/css/main.css" or "/start" or "/"
		console.log("Request for " + pathname + " received.");
		

		route(handle, pathname, response);

	}

	http.createServer(onRequest).listen(process.env.PORT || 8888);
	console.log("Server has started.");
}

exports.start = start;