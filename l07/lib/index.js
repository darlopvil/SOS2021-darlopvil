
//Declarar una función
function hello(){
    console.log("Hola hola cacerola");
}

/*
Para poder usar la funcion en otra parte
es necesario exportarla bajo un nombre propio
(myHello p. e.) y llamar simplemente a la funcion
*/
module.exports.myHello =  hello;