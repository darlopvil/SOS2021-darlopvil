var chad = require("cool-ascii-faces");
var express = require("express");

var app = express();
var port=10000;

app.get("/chad", (req, res) => {
    res.send(chad());
    console.log("New request to /chad has arrived");
});

console.log("hola hola cacerola"); //Guardar Ctrl+S

app.listen(port,()=>{
    console.log("Server ready, listening on port "+ port);
})

