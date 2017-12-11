var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEndcoding ('utf-8');
  response.on("data", function(error){
    console.error(error);
    return;
  }).on("data", function(error){
  console.log(data.toString());
});

}).on ("error", function (error) {
  console.error(error);
});
