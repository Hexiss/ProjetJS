'use strict';

const { meubles, getOneV, SetV, UpdateV, DeleteV } = require('../validations/meubles');
const { postMeubles, getMeubles, getMeublesById, updateMeubleById, deleteMeubleById } = require('../controllers/meubles');

async function routes (fastify) {
    const defRoutes = [
        {
            method: 'POST',
            url: `/postMeuble`,
            schema: meubles,
            handler: postMeubles
        },
        {
            method: 'GET',
            url: `/getMeubles`,
            schema: meubles,
            handler: getMeubles
        },
        {
            method: 'GET',
            url: `/getMeublesById/:id`,
            schema: meubles,
            handler: getMeublesById
        },
        {
            method: 'UPDATE',
            url: `/updateMeubleById/:id`,
            schema: meubles,
            handler: updateMeubleById
        },
        {
            method: 'DELETE',
            url: `/deleteMeubleById/:id`,
            schema: meubles,
            handler: deleteMeubleById
        },
    ];
    // Add all routes into Fastify router system
    for (const route of defRoutes) {
    fastify.route(route);
    }
}

module.exports = routes;
