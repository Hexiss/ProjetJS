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
    { id: 1, name: "canapé XXL RGB" },
    { id: 2, name: "Bureau gamer" },
    { id: 3, name: "Chaise en bois douteux" }
]

app.put('/profils/:id', (req, res) => {
    const id = Number(req.params.profilsID)
    const index = profils.findIndex(product => product.id === id)
    if (index === -1) {
        return res.status(404).send('profil not found')
    }
    const updatedProfils = {
        id: profils[index].id,
        name: req.body.name
    }
    profils[index] = updatedProfils
    res.status(200).json('profils updated')
})

app.get('/profils/:id', (req, res) => {
    console.log('req.param.id: ', req.params.id );
    res.end();
});

app.post('/profils', (req, res) => {
    console.log(req.body);
    res.end();

});

app.put('/profils/:id', (req, res) => {
    console.log(req.body);
    res.end();
});

app.delete('/profils/:id', (req, res) => {
    console.log(req.body);
    res.end();
});

server.listen(PORT, () => console.log("c'est prêt"))