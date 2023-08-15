// test/test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../server'); // Import app and server

chai.use(chaiHttp);
const expect = chai.expect;

describe('Simple REST API', () => {
    after(() => {
        server.close(); // Close the server after tests are done
    });

    it('should get random number', async () => {
        const response = await chai.request(app).get('/roll');
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('number');
    });

});