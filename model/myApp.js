let mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const meubleSchema = new Schema({

    nom: {type: String, required: true},
    reference: {type: String, unique: true, required: true},
    disponible: {type: Boolean, required: true},
    img: String
},
);

const meuble = model('meubles', meubleSchema);


const meubles = [
    { id: 0, nom: "Mini table apéro", reference:"54YARG43", disponible:"true" },
    { id: 1, nom: "canapé XXL RGB aux couleurs de la France", reference:"GGRY54G2", disponible:"false" },
    { id: 2, nom: "Bureau gamer", reference:"R461GREE2", disponible:"true" },
    { id: 3, nom: "Chaise en bois douteux", reference:"F8G097024H", disponible:"false" }
]