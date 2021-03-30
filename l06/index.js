var express = require("express");
var parseador = require("body-parser"); //no usar esto, al invocarlo en la linea 9 te pone deprecated. Usar express funciona.
var PORT = (process.env.PORT || 1607);

var BASE_API_PATH = "/api/v1"; //todo lo que este aqui dentro es de esta version de la api


var app = express();
app.use(express.json()); //todos los json te los pasa a objetos que se pueden coger con body
app.use("/", express.static("./public"));

var contacts = [

    {
        "name": "pablo",
        "phone": 123465

    },{
        "name": "pepe",
        "phone": 65798


    }

];

app.get(BASE_API_PATH + "/contacts", (req,res)=>{
    res.send(JSON.stringify(contacts, null, 2)); //el null es un callback por si hay que transformar cosas antes
})

app.post(BASE_API_PATH+ "/contacts", (req,res)=>{
    var newContact = req.body //el cuerpo del mensaje, dentro del mensaje
    //console.log("new contact added :" + JSON.stringify(newContact,null,2));
    console.log(`new contact to be added: <${JSON.stringify(newContact,null,2)}>`);
    //console.log(`new contact added: <${newContact}>`);
    contacts.push(newContact); //mete el nuevo contacto al array de objetos
    res.sendStatus(201);
})

app.listen(PORT, ()=>{

   // console.log("Server ready in port"+ PORT);
    console.log(`Server ready at ${PORT}!`);
});