//console.log("hola mundo");

/*
Cambio importante para que funcione la redireccion al .html estatico
de tu carpeta public cuando accedas a la raiz de la url de heroku. 
Para ello basta con modificar el nombre de dicho .html como "index.html"
*/

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
lo que sea que se haya pedido como petete.html o pedrito.jpg*/

app.use("/", express.static("./public"));


//Acceso usando GET
app.get("/hello", (req, res) => {
    res.send("<html><body><h1> GET Hello from this tiny server</h1></body></html>");
});

//Acceso especial heroku edition
app.get("/info/air_routes",(req, res)=>{

    res.send(`<!DOCTYPE html>
    <html>
    <head>
    <style>
    table, th, td {
      border: 1px solid black;
    }
    </style>
    </head>
    <body>
    
    <h3> <a href=" https://www.fomento.gob.es/BE/?nivel=2&orden=03000000"> Enlace de referencia </a>
    </h3>
      <table>
      <colgroup>
        <col style="background-color:#f2f2f2">
      </colgroup>
      <tr>
        <th>districts</th>
        <th>years</th>
        <th>flights</th>
        <th>passengers</th>
        <th>total_goods(kg)</th>
      </tr>
      <tr>
        <td>Madrid</td>
        <td>2020</td>
        <td>158405</td>
        <td>17071089</td>
        <td>401133380</td>
      </tr>
      <tr>
        <td>Cataluña</td>
        <td>2017</td>
        <td>320456</td>
        <td>47262688</td>
        <td>156105304</td>
      </tr>
  
      <tr>
        <td>Andalucía</td>
        <td>2020</td>
        <td>78777</td>
        <td>7441585</td>
        <td>10561907</td>
      </tr>
  
      <tr>
        <td>Andalucía</td>
        <td>2019</td>
        <td>194370</td>
        <td>27332163</td>
        <td>12971632</td>
      </tr>
  
      <tr>
        <td>Madrid</td>
        <td>2019</td>
        <td>417958</td>
        <td>61703370</td>
        <td>558566726</td>
      </tr>
    </table>
    
    </body>
    </html>`);
});

//Acceso usando POST -comentado por heroku-
/*app.post("/hello", (req, res) => {
    res.send("<html><body><h1> POST Hello from this tiny server</h1></body></html>");
});*/

//arrancar el server

//Este es el callback bueno, esta ready de verdad el srever
app.listen(puerto, () => {

    console.log("DENTRO CALLBACK - Serve ready listening on port " + puerto);

}
);

/*Se puede quitar este callback entonces
console.log("FUERA CALLBACK - Serve ready listening on port " + puerto);*/