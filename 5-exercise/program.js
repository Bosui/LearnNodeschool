var fs=require('fs');
var path= require('path');
var extension = '.' + process.argv[3];
fs.readdir(process.argv[2], function (err, files) {
  if (err) {
    console.error(err);
  }
  // console.log(files);
for (var i = 0; i < files.length; i++) {
  if (extension === path.extname(files[i])){
    console.log(files[i]);
  }
  // files[i];
}
});
