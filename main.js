var fs = require('fs');

// // Read the file
// var img = fs.readFileSync('./cat.jpg');

// // Write the file 
// fs.writeFileSync('./dog.jpg', img);

var Jimp = require("jimp");

// open a file called "lenna.png"
Jimp.read("cat.jpg", function (err, lenna) {
    if (err) throw err;
    lenna.greyscale()                 // set greyscale
         .write("dog.jpg"); // save
});

console.log("Done");