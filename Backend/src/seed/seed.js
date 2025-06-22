const db = require('../config/db.js');

async function seed() {
  try {
    await db.query('DELETE FROM ci_incidents');
    await db.query('DELETE FROM ci_documents');
    await db.query('DELETE FROM ci_changes');
    await db.query('DELETE FROM ci_relations');
    await db.query('DELETE FROM configuration_items');
    await db.query('DELETE FROM ci_types');
    await db.query('DELETE FROM environments');

    await db.query("INSERT INTO ci_types (nombre) VALUES ('Servidor'), ('Base de Datos'), ('Aplicación')");
    await db.query("INSERT INTO environments (nombre) VALUES ('DEV'), ('QA'), ('PROD')");

    await db.query(`
      INSERT INTO configuration_items
      (nombre_ci, tipo_ci_id, descripcion, numero_serie, version, fecha_adquisicion,
       estado_actual, ubicacion_fisica, propietario_responsable, estado_configuracion,
       numero_licencia, fecha_vencimiento, nivel_seguridad, cumplimiento, entorno_id)
      VALUES
      ('Servidor1', 1, 'Servidor de Aplicaciones', 'SN123456', 'v1.0', '2022-01-01',
        'Activo', 'Sala de Servidores 1', 'Equipo de Infraestructura', 'Aprobado',
        'SER1020', '2023-01-01', 'Alto', 'Cumple', 3),
      ('Aplicación', 3, 'Aplicación de contabilidad', NULL, 'v2.5', '2022-03-15',
        'Activo', 'Servidor1', 'Equipo de Desarrollo', 'Aprobado',
        'EQUIA121', '2024-01-01', 'Medio', 'Cumple', 3)
    `);

    await db.query(`
      INSERT INTO ci_relations (source_ci_id, target_ci_id, tipo_relacion)
      VALUES (1, 2, 'padre')
    `);

    await db.query(`
      INSERT INTO ci_changes (ci_id, fecha_cambio, descripcion_cambio)
      VALUES 
      (1, '2022-02-01', 'Actualización de Software'),
      (2, '2022-04-01', 'Parche de Seguridad')
    `);

    await db.query(`
      INSERT INTO ci_documents (ci_id, titulo, url, tipo)
      VALUES 
      (1, 'Manual', 'https://192.168.9.12/manual', 'Manual'),
      (2, 'Documentación Técnica', 'https://192.168.9.12/tecnica', 'Técnica')
    `);

    await db.query(`
      INSERT INTO ci_incidents (ci_id, descripcion, url_incidente)
      VALUES 
      (1, 'Incidente relacionado con rendimiento', 'https://192.168.9.12/incidente1'),
      (2, 'Incidente de error de seguridad', 'https://192.168.9.12/incidente2')
    `);

    console.log('Base de datos poblada correctamente.');
    process.exit();
  } catch (err) {
    console.error('Error en el seed:', err);
    process.exit(1);
  }
}

seed();