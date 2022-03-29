const { Server } = require('socket.io');
const express = require('express');
const app = express();
const { createServer } = require('http');
const server = createServer(app);

const PORT = 3000;
const io = new Server(server);

app.use(express.json());

const meubles = [
    { id: 0, name: "Mini table apéro" },
    { id: 1, name: "canapé XXL RGB aux couleurs de la France" },
    { id: 2, name: "Bureau gamer" },
    { id: 3, name: "Chaise en bois douteux" }
]

let id = 0;

// Ajouter un meuble
app.post("/postMeuble", (req, res) => {
    let name = req.body.name;
    console.log(req.body);

    try {
        meubles.push({"id": id++, "name": name});

        return res.status(201).json(meubles);
    } catch (error) {
          return res.status(500).json("error:" + error);
    }

});

// Retourner un meuble
app.get("/getMeubles", (req, res) => {
    return res.status(201).json(meubles);
});


// Retourner un meuble par ID
app.get("/getMeublesById/:id", (req, res) => {
    let meubleId = req.params.id;

    try {
        let currentMeuble = meubles.find(meuble => meuble.id == meubleId);

        if(currentMeuble) {
            return res.status(201).json(currentMeuble);
        } else {
            return res.status(201).json("Meuble not found");
        }

    } catch(error) {
        return res.status(500).json("error:" + error);
    }
});

// Modifier les refs d'un meuble
app.put("/updateMeubleById/:id", (req, res) => {
    let meubleId = req.params.id;

    let name = req.body.name;

    try {
        let currentMeuble = meubles.find(meuble => meuble.id == meubleId);
        if(currentMeuble) {
            let index = meubles.indexOf(currentMeuble);
            meubles[index].name = name;
            return res.status(201).json(meubles);
        } else {
            return res.status(201).json("Meuble not found");
        }

    } catch(error) {
        return res.status(500).json("error:" + error);
    }
});


// Supprimer un meuble
app.delete("/deleteMeubleById/:id", (req, res) => {
    let meubleId = req.params.id;

    try {
        let currentMeuble = meubles.find(meuble => meuble.id == meubleId);
        if(currentMeuble) {
            let index = meubles.indexOf(currentMeuble);
            meubles.splice(index, 1);
            return res.status(201).json(meubles);
        } else {
            return res.status(201).json("Meuble not found");
        }

    } catch(error) {
        return res.status(500).json("error:" + error);
    }
});

server.listen(PORT, () => console.log("Seveur allumé"))