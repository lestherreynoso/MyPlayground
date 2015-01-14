var fs = require("fs");

 function processFile(response, type, pathname, write){
	pathname = pathname.replace(/\//,"");

	// if no pathname specified go home
	if (pathname == "")
		pathname = "html/index.html";
 	
 	fs.readFile(pathname, function(err, data){
 		if (err) 
 			console.log("unable to handle " + pathname);
 		response.writeHead(200, {"Content-Type": type});
 		if (write){
 			response.write(data);
 			response.end();
 		}
 		else
			response.end(data);
 	});
 }


exports.processFile = processFile;