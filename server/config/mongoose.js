const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const fs = require('fs');
const path = require('path');
// mongoose.connect('mongodb://localhost/weather');
// var models_path = path.join(__dirname, './../models');
// fs.readdirSync(models_path).forEach(function(file){
//   if(file.indexOf('.js') >= 0){
    // require(models_path + '/' + file);
//   }
// });
