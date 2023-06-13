# Home page de plataforma de streaming

Este es un proyecto desarrollado con react js que trata de replicar el diseño de la página de inicio de una plataforma de streaming de series, peliculas y documentales. Se puede interactuar con el sitio pero este no cuenta con ninguna funcionalidad, es decir ningún enlace funciona y no es posible reproducir ni buscar contenido. Esto se debe a que para este proyecto quise enfocarme únicamente en el diseño visual del sitio.

Sitio desplegado: [ir a HVOmax](https://hvo.vercel.app/)

## NPM

![](https://res.cloudinary.com/drdgu83bp/image/upload/v1678719003/Assets/npm_logo_k9cjrx.png)

npm (Node Package Manager) es, como su propio nombre indica, el gestor de paquetes, módulos o librerías que nos proporciona Nodejs. Se trata de una herramienta que nos facilita el trabajo con librerías permitiéndonos instalar, actualizar y eliminar librerías de forma relativamente sencilla y automatizar la gestión de dependencias.

Para comenzar a trabajar con npm utilizaremos npm cli, el módulo que gestiona la consola de npm y desde la que correremos los comandos que necesitemos. Este módulo viene incorporado con Nodejs, por lo que al instalar Nodejs adquiriremos también NPM.

Para comprobar si tenemos instalado Nodejs podemos escribir en nuestra consola el siguiente comando:

```
node -v
```

Para comprobar si ya tenemos npm instalado correremos un comando similar:

```
npm -v
```

En caso de que no tengamos instalado npm o Nodejs, procederemos a instalar Node.js para obtener ambos.
Recomiendo seguir los pasos de instalación indicados en el sitio oficial:
[Node.js.org](https://nodejs.org/en/download/package-manager/#windows-1)

## Correr proyecto

Una vez instalado npm, siga estos sencillos pasos:

- Utilizar el comando cd en la consola para ubicarte la nueva carpeta donde ubicaremos el proyecto.
- Clonar repositorio escribiendo en la consola el siguiente script:

```
git clone https://github.com/JoaquinBohn/HVO.git
```

- Escribir el siguiente código para instalar todas las dependencias:

```
npm install
```

- Finalmente correr el proyecto escribiendo:

```
npm start
```

## Acerca de HVOmax

Como se mencionó al inicio del documento esta página no cuenta con ninguna funcionalidad más allá de las interacciones básicas. Como se podrá deducir por el nombre intenté guiar el diseño del proyecto tratando de replicar el famoso servicio de streaming, con pequeñas diferencias en detalles. El mismo cuenta con cinco secciones además del navbar y footer. La primer sección es un carousel de tres series/peliculas destacadas, la segunda es otro carousel (sin autoplay) del contenido que es tendencia en el momento, en tercer lugar otro carousel con las categorías del contenido de la plataforma, en la cuarta sección una pelicula destacada con información y un video, quinta y última sección tenemos otro carousel con el contenido exclusivo de la plataforma.

El sitio cuenta con un diseño responsive enfocado para los siguientes valores del ancho de pantalla:

- Full screen
- Tablet: 760px
- Dispositivos móviles: 375px

No se asegura la correcta visualización en otros anchos de pantalla.
