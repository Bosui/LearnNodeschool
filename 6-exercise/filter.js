 module.exports = function(dir, ext, callback) {

     var fs = require('fs');
     var path = require('path');

     var extension = '.' + ext;
     var results = [];

     fs.readdir(dir, function(err, files) {
         if (err) {
             return callback(err);
         }
         // console.log(files);
         for (var i = 0; i < files.length; i++) {
             if (extension === path.extname(files[i])) {
                 results.push(files[i]);
             }
             // files[i];
         }
         callback(null, results);
     });
 };
