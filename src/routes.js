
const { Router } = require('express');
const ClientController = require('./controllers/clientController');
const CarController = require('./controllers/carController')

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({message: 'Server is on...'});
});

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);
routes.get('/clients/:id', ClientController.show);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.destroy);

routes.post('/cars', CarController.store);
routes.get('/cars', CarController.index);
routes.get('/cars/:id', CarController.show);
routes.put('/cars/:id', CarController.update);
routes.delete('/cars/:id', CarController.destroy);

module.exports = routes;
