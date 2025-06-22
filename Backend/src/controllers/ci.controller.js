const db = require('../config/db.js');

exports.getAllCIs = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM configuration_items');
  res.json(rows);
};

exports.getCIById = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM configuration_items WHERE id = ?', [req.params.id]);
  if (!rows.length) return res.status(404).json({ message: 'CI no encontrado' });
  res.json(rows[0]);
};

exports.createCI = async (req, res) => {
  const ci = req.body;
  const [result] = await db.query(`
    INSERT INTO configuration_items
    (nombre_ci, tipo_ci_id, descripcion, numero_serie, version, fecha_adquisicion,
     estado_actual, ubicacion_fisica, propietario_responsable, estado_configuracion,
     numero_licencia, fecha_vencimiento, nivel_seguridad, cumplimiento, entorno_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    ci.nombre_ci, ci.tipo_ci_id, ci.descripcion, ci.numero_serie, ci.version,
    ci.fecha_adquisicion, ci.estado_actual, ci.ubicacion_fisica,
    ci.propietario_responsable, ci.estado_configuracion, ci.numero_licencia,
    ci.fecha_vencimiento, ci.nivel_seguridad, ci.cumplimiento, ci.entorno_id
  ]);
  res.status(201).json({ id: result.insertId });
};

exports.updateCI = async (req, res) => {
  const ci = req.body;
  await db.query(`
    UPDATE configuration_items SET
    nombre_ci = ?, tipo_ci_id = ?, descripcion = ?, numero_serie = ?, version = ?,
    fecha_adquisicion = ?, estado_actual = ?, ubicacion_fisica = ?, propietario_responsable = ?,
    estado_configuracion = ?, numero_licencia = ?, fecha_vencimiento = ?, nivel_seguridad = ?,
    cumplimiento = ?, entorno_id = ?
    WHERE id = ?
  `, [
    ci.nombre_ci, ci.tipo_ci_id, ci.descripcion, ci.numero_serie, ci.version,
    ci.fecha_adquisicion, ci.estado_actual, ci.ubicacion_fisica,
    ci.propietario_responsable, ci.estado_configuracion, ci.numero_licencia,
    ci.fecha_vencimiento, ci.nivel_seguridad, ci.cumplimiento, ci.entorno_id, req.params.id
  ]);
  res.json({ message: 'CI actualizado' });
};

exports.deleteCI = async (req, res) => {
  await db.query('DELETE FROM configuration_items WHERE id = ?', [req.params.id]);
  res.json({ message: 'CI eliminado' });
};