
const { Router } = require('express');
const UserController = require('./controllers/userController');
const CarController = require('./controllers/carController')

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({message: 'Server is on...'});
});

routes.post('/user', UserController.store);
routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.destroy);

routes.post('/car', CarController.store);
routes.get('/car', CarController.index);
routes.get('/car/:id', CarController.show);
routes.put('/car/:id', CarController.update);
routes.delete('/car/:id', CarController.destroy);

module.exports = routes;
