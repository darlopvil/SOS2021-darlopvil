//console.log("hola mundo");

var express = require("express"); //importado
var path = require("path"); //por si no te funciona llamarlo con ./recurso

/**
 * Otra forma es usar __dirname + "/recurso" 
 * De hecho, es mas segura. Se pueden hacer las 3 formas.
 * A mi no me funciona el path, pero si el ./ y uso windows
 */

var app = express(); //el constructor ya te da la app web

/**
 * Para subirlo a heroku no puedo dejar este puerto, tengo 
 * que desplegar una variable del entorno. De todas formas, 
 * se pueden dejar las dos opciones para permitir el acceso local
 * usando ||
*/
var puerto = (process.env.PORT || 10000); //la aplicacion arranca en el puerto este

/*
con .use(), partiendo de la raiz del programa, me busca en la carpeta "public"
lo que sea que se haya pedido como petete.html o pedrito.jpg
*/

app.use("/", express.static("./public"));

//Acceso usando GET
app.get("/hello", (req, res) => {
    res.send("<html><body><h1> GET Hello from this tiny server</h1></body></html>");
});

//Acceso usando POST
app.post("/hello", (req, res) => {
    res.send("<html><body><h1> POST Hello from this tiny server</h1></body></html>");
});

//arrancar el server

//Este es el callback bueno, esta ready de verdad el srever
app.listen(puerto, () => {

    console.log("DENTRO CALLBACK - Serve ready listening on port " + puerto);

}
);

/*Se puede quitar este callback entonces
console.log("FUERA CALLBACK - Serve ready listening on port " + puerto);*/