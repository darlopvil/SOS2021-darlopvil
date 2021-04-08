var express = require("express");
var bodyParser = require("body-parser");

var lib = require("./lib"); //llamar al fichero comun. Se puede renombrar como idnex.js y se lanza solo (por si o tengo en una folder)
lib.myHello();  //usarlo

var contactAPI = require("./contactAPI");
contactAPI.register(app);

var PORT = (process.env.PORT || 1607);

var app = express();

app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});