console.log("\n--- START SEARCH ---\n");

const fs = require('fs');

var results = [];
var search = function(dir,args) {
    var list = fs.readdirSync(dir);
    /* get arguments from comand line */
    var SearchType = args[2];
    var SearchTerm = args[3];
    /* for each list items  */
    list.forEach((file) => {
        var stat = fs.statSync(file,function(err, stats){
            if(stats && stats.isDirectory()){
                /* if directory run recursively */
                dir = dir + '\\' + file;
                results = results.concat(search(dir, args));
            }
        });
        if(SearchType === findExtension(file) && findTerm(file,SearchTerm) != -1){
            file = dir + '\\' + file;
            results.push(file);
        }
        function findExtension(file){
            /* find extension of the file */
            return file.split('.').pop();
        }
        function findTerm(file,SearchTerm){
            /* search the term in the file */
            var flag = fs.readFileSync(file, (error,data) => {
                if(error) console.log('error catch: ' + error);
            });
            return flag.indexOf(SearchTerm);
        }
    });
    /* return results */
    if(results.length != 0) return results;
    else return("No file was found");
}

console.log(search(__dirname,process.argv));
console.log("\n--- END SEARCH ---\n");