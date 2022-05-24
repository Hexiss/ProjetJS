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
fastify.register(require('./routes/myAppR'), { prefix: '/v1/myApp' });

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

let id = 0;

// Ajouter un meuble
fastify.post("/postMeuble", (req, res) => {
    let name = req.body.name;
    console.log(req.body);

    try {
        meubles.push({"id": id++, "name": name});

        return res.status(201).json(meubles);

    } catch (error) {
          return res.status(500).json("error:" + error);
    }

});

// Retourner tous les meubles
fastify.get("/getMeubles", (req, res) => {
    return res.status(201).json(meubles);
});

// Retourner un meuble par ID
fastify.get("/getMeublesById/:id", (req, res) => {
    let meubleId = req.params.id;

    try {
        let currentMeuble = meubles.find(meuble => meuble.id == meubleId);

        if(currentMeuble) {
            return res.status(201).json(currentMeuble);
        } else {
            return res.status(201).json("Meuble non trouvé");
        }

    } catch(error) {
        return res.status(500).json("error:" + error);
    }
});

// Modifier les refs d'un meuble
fastify.put("/updateMeubleById/:id", (req, res) => {
    let meubleId = req.params.id;

    let name = req.body.name;

    try {
        let currentMeuble = meubles.find(meuble => meuble.id == meubleId);
        if(currentMeuble) {
            let index = meubles.indexOf(currentMeuble);
            meubles[index].name = name;
            return res.status(201).json(meubles);
        } else {
            return res.status(201).json("Meuble non trouvé");
        }

    } catch(error) {
        return res.status(500).json("error:" + error);
    }
});


// Supprimer un meuble
fastify.delete("/deleteMeubleById/:id", (req, res) => {
    let meubleId = req.params.id;

    try {
        let currentMeuble = meubles.find(meuble => meuble.id == meubleId);
        if(currentMeuble) {
            let index = meubles.indexOf(currentMeuble);
            meubles.splice(index, 1);
            return res.status(201).json(meubles);
        } else {
            return res.status(201).json("Meuble non trouvé");
        }

    } catch(error) {
        return res.status(500).json("error:" + error);
    }
});
dz  