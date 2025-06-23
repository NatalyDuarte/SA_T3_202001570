const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/cis', require('../src/routes/ci.routes.js'));

describe('API de Configuration Items', () => {
    test('GET /cis - debería devolver 200 y un array', async () => {
        const res = await request(app).get('/cis');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('GET /cis/:id - debería devolver un CI por ID', async () => {
        const res = await request(app).get('/cis/1');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id', 1);
    });

    test('POST /cis - debería crear un nuevo CI', async () => {
        const nuevoCI = {
        nombre_ci: "Servidor Test",
        tipo_ci_id: 1,
        descripcion: "Servidor para pruebas unitarias",
        numero_serie: "TEST123",
        version: "vTest",
        fecha_adquisicion: "2024-01-01",
        estado_actual: "Activo",
        ubicacion_fisica: "Lab Test",
        propietario_responsable: "QA",
        estado_configuracion: "Aprobado",
        numero_licencia: "LIC-TEST",
        fecha_vencimiento: "2026-01-01",
        nivel_seguridad: "Bajo",
        cumplimiento: "Cumple",
        entorno_id: 1
        };

        const res = await request(app).post('/cis').send(nuevoCI);
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
    });

    test('PUT /cis/:id - debería actualizar un CI existente', async () => {
        const updatedCI = {
            nombre_ci: "Servidor Actualizado",
            tipo_ci_id: 1,
            descripcion: "Servidor actualizado por pruebas",
            numero_serie: "ACTUAL123",
            version: "v2.0",
            fecha_adquisicion: "2023-01-01",
            estado_actual: "Activo",
            ubicacion_fisica: "Data Center",
            propietario_responsable: "Infraestructura",
            estado_configuracion: "Revisado",
            numero_licencia: "LIC-NEW",
            fecha_vencimiento: "2027-01-01",
            nivel_seguridad: "Alto",
            cumplimiento: "Cumple",
            entorno_id: 3
        };

        const res = await request(app).put('/cis/1').send(updatedCI);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("CI actualizado");
    });

    test('DELETE /cis/:id - debería eliminar un CI', async () => {
        const res = await request(app).delete('/cis/1');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('CI eliminado');
    });


});
