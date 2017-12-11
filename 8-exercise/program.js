var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function (response) {
response.pipe(bl(function (err, data) {
  if (err) {
    return console.error(err);

  }
}));
  response.setEndcoding('utf-8');

  response.on("error", function(error){
    console.error(error);
    return;
  });
  response.on("error", function(error){
  console.log(data.toString());
});

}).on ("error", function (error) {
  console.error(error);
});
