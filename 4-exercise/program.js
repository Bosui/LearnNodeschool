var fs=require('fs');
var file = fs.readFileSync(process.argv[2], 'utf-8', function (err, data) {
if (err) {
  console.error(err);
}
var lines = data.split('\n');
console.log(lines.length-1);

});
