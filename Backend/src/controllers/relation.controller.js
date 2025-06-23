const db = require('../config/db.js');

exports.createRelation = async (req, res) => {
  const { source_ci_id, target_ci_id, tipo_relacion } = req.body;
  const [result] = await db.query(
    'INSERT INTO ci_relations (source_ci_id, target_ci_id, tipo_relacion) VALUES (?, ?, ?)',
    [source_ci_id, target_ci_id, tipo_relacion]
  );
  res.status(201).json({ id: result.insertId });
};