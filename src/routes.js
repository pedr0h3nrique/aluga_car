
const { Router } = require('express');
const clientController = require('./controllers/clientController');
const carController = require('./controllers/carController')

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({message: 'Server is on...'});
});

routes.post('/clients', clientController.store);
routes.get('/clients', clientController.index);
routes.get('/clients/:id', clientController.show);
routes.put('/clients/:id', clientController.update);
routes.delete('/clients/:id', clientController.destroy);

routes.post('/cars', carController.store);
routes.get('/cars', carController.index);
routes.get('/cars/:id', carController.show);
routes.put('/cars/:id', carController.update);
routes.delete('/cars/:id', carController.destroy);

module.exports = routes;
