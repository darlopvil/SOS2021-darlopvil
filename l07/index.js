var express = require("express");
var app = express();
app.use(express.json());

/*Aqui llamo a la funcion externa
Primeramente la almaceno en una variable (lib)
y luego la lanzo/invoco
*/
var lib = require("./lib"); //llamar al fichero comun. Se puede renombrar como index.js y se lanza solo (por si lo tengo en una folder)
lib.myHello();  //usarlo

var contactAPI = require("./contactAPI"); //llamar a la api de contacts con sus metodos
contactAPI.register(app);

//Declarar el puerto
var PORT = (process.env.PORT || 1607);

//Al acceder a la carpeta raiz, ir a /public
app.use("/", express.static("./public"));

//Listenear el puerto
app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});