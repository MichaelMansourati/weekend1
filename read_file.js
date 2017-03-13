var arg = process.argv.slice(2);
var argStr = String(arg);

var fs = require("fs");

fs.readFile(arg, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});