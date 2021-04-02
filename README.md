# SOS2021-darlopvil


![Si ves esto es porque no ha cargado la foto](https://raw.githubusercontent.com/darlopvil/SOS2021-darlopvil/main/assets/studying.png)


Mi repositorio personal de pruebas y testeos.

***Recordatorios personales***

1.- ¿Cómo subir un proyecto desde VSC a github?

    1.1- ¿Vas a realizar un commit sobre unos archivos de un repositorio que ya usas?
        1.1.1- Seleccionar esos archivos, dándole al más "+"
        1.1.2- Escribir el mesaje del commit en la cajita y pulsar la palomita
        1.1.3- Esperar a que se haya subido (revisar los iconos de las flechas abajo a la izquierda)
        1.1.4- Una vez terminado, le das, aceptas y te vas a la página para comprobar los cambios

    1.2- ¿Tienes un nuevo proyecto entre manos que quieres subir a un nuevo repositorio?
        1.2.1- Crea ese nuevo repositorio con su README.md y asegúrate de copiar la url del mismo.
        1.2.2- Abre una nueva ventana de VSC y dale a clonar repositorio.
        1.2.3- Selecciona una carpeta donde guardar ese nuevo repo con el que vas a trabajar.
        1.2.4- Asegúrate de seleccionar el repositorio y meter su nombre cuando te lo indique.

2.- Ten cuidado con:

    2.1- Una vez abierto un proyecto con su repositorio configurado, 
        ¡no lo uses para mandar otros archivos a otro repositorio!
        Vete al paso 1.2 y sigue los pasos
    2.2- Acuérdate de, al crear un proyecto, hacer doble carpeta. Esto significa que
        la carpeta en la que creas el workspace es distinta de la que en la que trabajas y por tanto
        subirás al github. WORKSPACE_FOLDER<GITHUB_FOLDER

3.- ¿Qué hacer en las clases con Pablo?

        Todo lo que se haga en las clases de los J lo vas a subir a tu github, así que abre el vscode
        en la carpeta de tu repositorio. Crea una carpeta, y dentro de ella ya puedes ponterte a codear.

4.- Pasos para subir código a HEROKU

    4.1- Si es para crear un nuevo enlace de heroku:
        4.1.1- Abre tu vscode en una nueva ventana, carga la carpeta en la que esté alojado localmente 
        tu repositorio
        4.1.2- Haz los cambios que veas oportunos (commit, push, etc)
        4.1.3- Abre el terminal y asegúrate de que estás en el directorio de la carpeta donde trabajas 
        con "ls"
        4.1.4- Para montar una carpeta próxima en tu ruta usa "cd ./nombreCarpeta"
        4.1.5- git init
        4.1.6- git add .
        4.1.7- git commit -m "mensaje a commitear"
        4.1.8- heroku --version
        4.1.9- heroku login y le das a "log in" en la pestaña del navegador
        4.1.9.a- heroku create nombre
        4.1.9.b- git remote -v para ver que está sincronizado tu código con heroku
        4.1.9.c- git push --set-upstream heroku master

    4.2 Si ya tienes hecha una app heroku y quieres subir cambios:
        4.2.1- Abre tu vscode en una nueva ventana, carga la carpeta en la que esté alojado localmente 
        tu repo.
        4.2.2- Haz los cambios que veas oportunos (commit, push, etc)
        4.2.3- Abre el terminal y asegúrate de que estás en el directorio de la carpeta donde trabajas 
        con "ls"
        4.2.4- Para montar una carpeta proxima en tu ruta usa "cd ./nombreCarpeta"
        4.2.5- git init
        4.2.6- git add .
        4.2.7- git commit -m "mensaje a commitear"
        4.2.8- heroku --version
        4.2.9- heroku login y le das a "log in" en la pestaña del navegador
        4.2.9.a- git remote -v para ver que está sincronizado tu código con heroku
        4.2.9.b- git push heroku master

5.- Errores al subir cosas a Heroku:

        5.1- Al hacer el push final me salta el error clásico
 [Intenta hacer el push "forzado" con -f](https://stackoverflow.com/questions/9794413/failed-to-push-some-refs-to-githeroku-com)
        
        5.2- Aunque suba los cambios bien a Heroku, al irme al link me tira un Application Error para que vea el historial con --tails

            Hazlo. Vete al historial con "heroku logs --tail". Y fíjate qué ha fallado. Pueden ser diversas cosas. 
[Te dejo aquí una relacionada unas sentencias que faltaban en el package.json del proyecto](https://stackoverflow.com/questions/34535253/npm-start-microsoft-jscript-runtime-error-800a138f-object-expected)

    
4.- Links interesantes:

+ [Configuración remota de un git con VSC](https://code.visualstudio.com/docs/editor/versioncontrol)
+ [Como borrar el último commit, cuidado, borra el fichero!](https://aprendegit.com/como-deshacer-el-ultimo-commit-en-git/)
+ [Para ver todas tus apps y borrarlas si necesitas (solo 4!)](https://dashboard.heroku.com/apps)
+ [Agregar imágenes al readme](https://parzibyte.me/blog/2019/01/17/agregar-imagenes-github-readme-otras-paginas/)
+ [Cambiar, borrar o introducir un heroku si no te aparece al hacer git remove -v](https://stackoverflow.com/questions/6226846/heroku-how-to-change-a-git-remote-on-heroku)

5.- Comandos útiles

    npm init -y (te crea el package.json con todo por defecto)
    touch index.js (te crea un js vacío)
    npm install express body-parser (instalar módulos)
    node index (te lanza el archivo index)

6.- Miscelánea:

    2 formas de escribir los mismo:
        console.log(`Server ready at ${PORT}!`);  <---Solo la exclamación al final
        console.log("Server ready in port" + PORT);

        console.log(`new contact to be added: <${JSON.stringify(newContact,null,2)}>`); <--- Entre <>
        console.log("new contact added :" + JSON.stringify(newContact,null,2));

    Para meter un objeto nuevo dentro de una array, hay que seleccionar POST y mandar la petición
    dentro del "body" + "raw" + "JSON" en postman