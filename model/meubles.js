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