'use strict';

const myAppModel = require('../model/meubles');

// Ajouter un meuble
async function postMeubles (req, res) {
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
}

// Retourner tous les meubles
async function getMeubles (req, res) {
    fastify.get("/getMeubles", (req, res) => {
        return res.status(201).json(meubles);
    });
}

// Retourner un meuble par ID
async function getMeubles (req, res) {
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
}

// Modifier les refs d'un meuble
async function getMeubles (req, res) {
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
}

// Supprimer un meuble
async function getMeubles (req, res) {
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
}

module.exports = {
postMeubles,
getMeubles,
getMeublesById,
updateMeubleById,
deleteMeubleById,
};
