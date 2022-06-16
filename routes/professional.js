// const routes = require('express').Router();

// routes.get('/', (req, res) => {
//   res.send('Shannon Christensen');
// })

// module.exports = routes;

const routes = require('express').Router();

const professionalController = require('../controllers/professional');

// GET /feed/posts
routes.get('/', professionalController.getData);
// localhost:8080/professional/
module.exports = routes;