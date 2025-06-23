[Regresar](README.md)

# Estructura del Proyecto
A continuación, se muestra cómo se organizó la API RESTful desarrollada en Node.js para gestionar los elementos de configuración (CIs) de una CMDB. La estructura sigue buenas prácticas de modularidad y organización.  


SA_T3_202001570/  
└── Backend/  
    ├── src/    
    │   ├── config/  
    │   ├── controllers/  
    │   ├── routes/  
    │   ├── seed/  
    │   └── server.js  
    ├── tests/  
    ├── .env  
    ├── index.js  
    └── package.json  

## src/config/db.js
Contiene la configuración de la conexión a MySQL. Se utiliza mysql2/promise y variables definidas en el archivo .env.

## src/controllers/
Aquí se definen los controladores de la lógica de negocio:
- ci.controller.js: CRUD completo para los elementos de configuración (CIs).
- relation.controller.js: Permite registrar relaciones entre CIs (como servidor → aplicación).

## src/routes/
Define los endpoints disponibles de la API:
- ci.routes.js → /cis: Registro, listado, actualización y eliminación de CIs.
- relation.routes.js → /relations: Permite registrar relaciones entre elementos.

## src/seed/seed.js
Este archivo contiene la carga inicial de datos. Primero limpia todas las tablas relacionadas con CIs y luego inserta datos de ejemplo. Se ejecuta con:
```bash
node src/seed/seed.js
```

## src/server.js
Inicializa la aplicación Express y monta las rutas definidas. Se separó del index.js para facilitar las pruebas unitarias.

## index.js
Es el punto de entrada principal. Arranca el servidor utilizando server.js y lo levanta en el puerto definido.

## .env
Contiene las variables de entorno necesarias para la conexión a la base de datos y configuración general del entorno:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=1234
DB_NAME=tarea
PORT=3000
```
## tests/
Carpeta que contiene las pruebas unitarias desarrolladas con jest y supertest.
- ci.test.js: Prueba los endpoints /cis.
- relation.test.js: Prueba el endpoint /relations.
Se ejecutan con:
```bash
npm test
```

[Regresar](README.md)
