

console.log("node search [EXT] [TEXT]");



if (process.argv.length < 4)
	console.log("You must enter EXT and TEXT arguments!");

else {

	var fs = require('fs');  // Node File System Module
	var path = require('path'); // Node Path Module 
	var currentPath = process.cwd(); 
	

	var fileExt = process.argv[2]; 
	var content = process.argv[3];
	var isFound = 0;

	function extension(element) {
	  var extName = path.extname(element);
	  //console.log(path.extname(element))
	  return extName === '.' + fileExt; 
	};

	

	fs.readdir(currentPath, function(err, list) {
	  list.filter(extension).forEach(function(value) {

	  	fs.readFile(value, function(err, cont) {
	    if (err)
	        throw err;
	    if(cont.indexOf(content)>-1)  {
	    	console.log(currentPath + "\\" + value);
	    }

		});
	      
	  });

	});	


}
