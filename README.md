# chat_js

Esta es una aplicación simple de una sala de chat creado con Nodejs.

Esta app puede ser usada en una computadora o puede utilizarse un contenedor de Docker.

## Uso en una computadora

Esta aplicación necesita que se tenga instalado node js (puedes ver el [siguiente link](https://nodejs.org/en/download/) para ver cómo instalarlo)

Clonar o descargar el archivo

Abrir una terminal o símbolo del sistema y  entrar a la carpeta "chat_js"

Instalar las dependencias con el comando (instalará también las dependencias de desarrollo, incluyendo nodemod)
```
$ npm i
```

Si prefiere instalar solo las dependencias de pruducción, puede agregar la bandera --production.

Para ejecutar el programa puede ejecutar alguno de los siguientes comandos

```
$ npm start #Para iniciar la aplicación en un entorno de producción

$npm run dev #Para ejecutar nodemon y el servidor se reinicie cada vez que se haga un cambio en el código.
```

## Uso en Docker

Debe tener instalado [Docker] y [Docker compose] para meter la app en un contenedor.

Por lo general, cuando se instala Docker, ya se instala en automático Docker compose, sin embargo, si hay problemas se le recomienda la documentación correspondiente.

Una vez que tenga instalado docker, debe modificar el archivo [docker-compose.yaml] según lo que usted necesite en el contenedor o cómo deba comportarse

Una vez modificado, escriba los siguientes comandos en una terminal:

```
$ docker-compose build #Para crear la imagen base del contenedor
$ docker-compose up #Para crear el contenedor
$ docker-compose down #En caso de que se desee detener y eliminar el contenedor
```
