var fs=require('fs');
var file = fs.readFileSync(process.argv[2]);
var text = file.toString();

var lines = text.split('\n');
console.log(lines.length-1);
