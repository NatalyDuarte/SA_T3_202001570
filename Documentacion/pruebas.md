[Regresar](README.md)

# Pruebas Unitarias
Para asegurar la calidad y correcto funcionamiento de la API RESTful que gestiona los Configuration Items (CIs) y sus relaciones, se implementaron pruebas unitarias automatizadas utilizando las librerías Jest y Supertest. Estas pruebas permiten validar cada uno de los endpoints y verificar que las operaciones CRUD y de gestión de relaciones respondan correctamente según lo esperado.

## Pruebas para Configuration Items (CIs)
Se diseñaron pruebas que cubren las operaciones básicas sobre el recurso Configuration Items:

- GET /cis
Se verifica que la ruta devuelva un código HTTP 200 y que el cuerpo de la respuesta sea un arreglo, asegurando que la consulta de todos los CIs funcione correctamente.

- GET /cis/:id
Se prueba la obtención de un CI específico por su identificador, esperando un código 200 y que el objeto devuelto contenga el campo id con el valor solicitado.

- POST /cis
Se envía un nuevo objeto CI para ser creado. La prueba espera que la respuesta tenga un código 201 (creado) y que el objeto devuelto contenga el campo id, indicando que el registro fue exitosamente insertado en la base de datos.

- PUT /cis/:id
Se prueba la actualización de un CI existente enviando nuevos datos para el mismo id. Se espera una respuesta con código 200 y un mensaje que confirme la actualización exitosa.

- DELETE /cis/:id
Se verifica la eliminación de un CI dado su id, esperando un código 200 y un mensaje que confirme que el CI fue eliminado correctamente.

Estas pruebas permiten validar la integridad y consistencia de las operaciones sobre la tabla configuration_items.

## Pruebas para Relaciones entre Configuration Items
También se implementó una prueba para la creación de relaciones entre CIs:

- POST /relations
Se simula el envío de una relación entre dos Configuration Items, especificando los identificadores de origen y destino y el tipo de relación. La prueba valida que la respuesta tenga un código 201 y que el cuerpo contenga el campo id de la relación creada.

## Herramientas Utilizadas
- Supertest: Librería que facilita la realización de peticiones HTTP a la API en el entorno de pruebas, simulando clientes RESTful.
- Jest: Framework de pruebas para JavaScript que permite organizar, ejecutar y validar las pruebas unitarias.  


[Regresar](README.md)