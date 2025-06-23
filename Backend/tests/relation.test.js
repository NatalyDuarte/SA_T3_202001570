const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/relations', require('../src/routes/relation.routes.js'));

describe('API de Configuration Items', () => {
    test('POST /relations - debería registrar una relación entre CIs', async () => {
        const relacion = {
            source_ci_id: 1,
            target_ci_id: 2,
            tipo_relacion: "dependencia"
        };

        const res = await request(app).post('/relations').send(relacion);
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
    });

});
