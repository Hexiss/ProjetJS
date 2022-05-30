'use strict';

const fastify = require('fastify')({ logger: true });
const { connect } = require('mongoose');

//Use cloud
//let databaseUrl = 'mongodb+srv://yolo:yolo@cluster0.0jc8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Use local storage
let databaseUrl = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
connect(databaseUrl).catch(err =>console.error(err));
const PORT = 3000;

fastify.register(require('fastify-helmet'));
fastify.register(require('./routes/meubles'), { prefix: '/v1/meubles' });

fastify.get('/', async () => { return { msg: "Hello World" }});

// Run the server!
const start = async () => {
    try {
    await fastify.listen(PORT, '0.0.0.0');
    console.log(fastify.printRoutes());
    } catch (err) {
    fastify.log.error(err);
    process.exit(1);
    }
   }
   start();