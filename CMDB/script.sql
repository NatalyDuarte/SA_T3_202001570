CREATE DATABASE IF NOT EXISTS tarea DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE tarea;

CREATE TABLE ci_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE environments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE configuration_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_ci VARCHAR(100) NOT NULL,
    tipo_ci_id INT NOT NULL,
    descripcion TEXT,
    numero_serie VARCHAR(100),
    version VARCHAR(50),
    fecha_adquisicion DATE,
    estado_actual VARCHAR(50),
    ubicacion_fisica VARCHAR(100),
    propietario_responsable VARCHAR(100),
    estado_configuracion VARCHAR(50),
    numero_licencia VARCHAR(100),
    fecha_vencimiento DATE,
    nivel_seguridad VARCHAR(50),
    cumplimiento VARCHAR(50),
    entorno_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (tipo_ci_id) REFERENCES ci_types(id),
    FOREIGN KEY (entorno_id) REFERENCES environments(id)
);

CREATE TABLE ci_relations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    source_ci_id INT NOT NULL,
    target_ci_id INT NOT NULL,
    tipo_relacion VARCHAR(50) DEFAULT 'dependencia', -- o padre/hijo

    FOREIGN KEY (source_ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE,
    FOREIGN KEY (target_ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);

CREATE TABLE ci_changes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ci_id INT NOT NULL,
    fecha_cambio DATE NOT NULL,
    descripcion_cambio TEXT NOT NULL,

    FOREIGN KEY (ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);

CREATE TABLE ci_documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ci_id INT NOT NULL,
    titulo VARCHAR(100),
    url TEXT,
    tipo VARCHAR(50),

    FOREIGN KEY (ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);

CREATE TABLE ci_incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ci_id INT NOT NULL,
    descripcion TEXT,
    url_incidente TEXT,

    FOREIGN KEY (ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);
