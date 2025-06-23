[Regresar](README.md)
# Endpoints RESTful
Para el manejo de los Configuration Items (CIs) y sus relaciones, se implementaron diferentes endpoints RESTful que permiten realizar las operaciones básicas de CRUD (Crear, Leer, Actualizar y Eliminar) y gestionar las relaciones entre los elementos de configuración. Estos endpoints se exponen a través de rutas en Express.js, facilitando la interacción con la base de datos tarea que contiene las tablas relacionadas con los CIs.

Se definió un conjunto de rutas para gestionar los CIs, que permiten realizar las siguientes operaciones:

## GET /
Obtiene un listado completo de todos los Configuration Items registrados en la base de datos. Este endpoint permite consultar todos los CIs con sus respectivos detalles.

## GET /:id
Recupera un Configuration Item específico utilizando su identificador único (id). Es útil para consultar la información detallada de un CI particular.

## POST /
Permite crear un nuevo Configuration Item, enviando en el cuerpo de la petición los datos necesarios, tales como nombre, tipo, descripción, versión, ubicación, entre otros campos definidos en la base de datos.

## PUT /:id
Actualiza la información de un Configuration Item existente identificado por su id. Este endpoint es utilizado para modificar cualquier atributo del CI, como su estado, versión o propietario responsable.

## DELETE /:id
Elimina un Configuration Item específico identificado por su id de la base de datos, realizando la limpieza correspondiente y asegurando la integridad referencial.

# Endpoints para Relaciones entre Configuration Items
Se implementó un endpoint para la creación de relaciones entre CIs, permitiendo representar dependencias o asociaciones entre ellos.

## POST /
Este endpoint permite crear una relación entre dos Configuration Items enviando en el cuerpo de la petición los identificadores de origen y destino (source_ci_id y target_ci_id), así como el tipo de relación (por defecto 'dependencia'). Este mecanismo facilita la gestión de las dependencias y la visualización de la arquitectura de los elementos de configuración.


Esta estructura RESTful asegura una API organizada, siguiendo las mejores prácticas para facilitar el mantenimiento y la escalabilidad del sistema CMDB.


[Regresar](README.md)