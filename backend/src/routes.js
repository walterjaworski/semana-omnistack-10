const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// GET = buscar informação
// POST = criar informação
// PUT = editar informação
// DELETE = deletar informação

// Query Params: usado na maioria das vezes com GET, ficam visíveis na url, request.query (filtros, ordenação, paginação)
// Route Params: request.params (identifica um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;