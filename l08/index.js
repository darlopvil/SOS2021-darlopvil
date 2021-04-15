var express = require("express");
var bodyParser = require("body-parser");
var Datastore = require("nedb");


var db = new Datastore();

var PORT = (process.env.PORT || 1607);
var BASE_API_PATH = "/api/v1";

var app = express();

app.use(bodyParser.json());

var initialContacts = [
    {
        "name": "pablo",
        "phone": 12345
    },
    {
        "name": "pepe",
        "phone": 6789
    }
];

//Check if db is empty
//db.find();

//Meter los objetos que queremos meter porque arrancamos todo vacio
db.insert(initialContacts);



app.get(BASE_API_PATH+"/contacts", (req,res)=>{

    //Buscar todo lo que haya + callback al devolver el dato
    db.find({}, (err,contactsInDB)=>{

        if(err){
            console.error("ERROR accessing DB in GET:"+ err);
            res.sendStatus(500);  //INTERNAL SERVER ERROR
        }else{
            var contactsToSend = contactsInDB.map( (c)=>{
                //We skip the "_id" field
                return {name: c.name,phone : c.phone};
            })
            res.send(JSON.stringify(contactsToSend,null,2));
        }
        

    });
    
 });

app.post(BASE_API_PATH+"/contacts", (req,res)=>{
    var newContact = req.body;
    
    console.log(`new contact to be added: <${JSON.stringify(newContact,null,2)}>`);

    db.find({name : newContact.name}, (err,contactsInDB)=>{

        if(err){
            console.error("ERROR accessing DB in GET:"+ err);
            res.sendStatus(500);
        }else{
            if(contactsInDB.length == 0){
                console.log("Inserting new contact in db:"+JSON.stringify(newContact,null,2));
                db.insert(newContact);
                res.sendStatus(201);  //OK
            }else{
                res.sendStatus(409);  //CONFLICT
            }
           
        }
        

    });
 });

 app.delete(BASE_API_PATH+ "/contacts/:name", (req,res)=>{
    var nameToBeDeleted = req.params.name;

    db.remove({name: nameToBeDeleted},{},(err,contactsInDB))

 });

app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});
