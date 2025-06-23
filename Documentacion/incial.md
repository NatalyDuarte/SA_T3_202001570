[Regresar](README.md)
# Script de Carga Inicial (Seed)
Para facilitar la inicialización de la base de datos y permitir pruebas consistentes del sistema, se desarrolló un script de carga inicial que automatiza la inserción de datos básicos en las tablas principales del esquema. Este script garantiza que la base de datos esté en un estado conocido y listo para su uso en ambientes de desarrollo y pruebas.

El script realiza las siguientes acciones de manera secuencial:

- Limpieza de tablas
Elimina todos los registros existentes en las tablas relacionadas con Configuration Items, sus tipos, entornos, relaciones, cambios, documentos e incidentes. Esto asegura que no queden datos residuales de ejecuciones anteriores que puedan interferir con las pruebas.

- Inserción de datos base
    - Tipos de Configuration Items (ci_types): Se insertan tres tipos básicos — Servidor, Base de Datos y Aplicación — que permiten categorizar los CIs.
    - Entornos (environments): Se agregan los ambientes comunes de desarrollo, pruebas y producción — DEV, QA y PROD.

- Creación de Configuration Items
Se añaden dos Configuration Items de ejemplo:
    - Un servidor con atributos detallados como número de serie, versión, estado, ubicación física, nivel de seguridad, entre otros.
    - Una aplicación con sus correspondientes detalles, vinculada al entorno de producción.

- Establecimiento de relaciones
Se crea una relación de tipo 'padre' entre los dos CIs insertados, ejemplificando una jerarquía o dependencia.

- Registro de cambios
Se documentan dos cambios realizados a los CIs, especificando fechas y descripciones para reflejar el historial de modificaciones.

- Carga de documentos asociados
Se asocian documentos relevantes a los CIs, con títulos, URLs y tipos, facilitando la gestión documental vinculada.

- Registro de incidentes
Se insertan incidentes relacionados con los CIs, aportando ejemplos de casos como problemas de rendimiento y errores de seguridad, con enlaces para consulta.  

[Regresar](README.md)