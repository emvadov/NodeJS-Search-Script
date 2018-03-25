var ext = process.argv[2];
var content = process.argv[3];

var fs = require('fs');
var currentPath = process.cwd();
var files = fs.readdirSync(currentPath);

// console.log("i'm programmed to sarch for " + content + " in files with extansion of: " + ext);

//files.forEach(element);

for(var i = 0; i < files.length; i++) {

fs.readFile(files[i], function(err, cont) {
    if (err)
        throw err;
    if(cont.indexOf("good")>-1) 
    	console.log("Found!");
    else
    	console.log("Not Found!");
   // console.log("String"+(cont.indexOf("good")>-1 ? " " : " not ")+"found in file: " +cont.value;
   //console.log(cont);
});

}