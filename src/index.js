const express = require('express');

// controllers
const { registerClient, 
    updateClient,
    listClients,
    getClient,
    deleteClient
} = require('./controllers/clientController');

const { registerCar,
    updateCar,
    listCars,
    getCar,
    deleteCar
} = require('./controllers/carController');

// configurações
const app = express();
app.use(express.json());

// rotas
app.post('/clients', registerClient);
app.put('/clients:id', updateClient);
app.get('/clients', listClients);
app.get('/clients:id', getClient);
app.delete('/clients:id', deleteClient);

app.post('/cars', registerCar);
app.put('/cars:id', updateCar);
app.get('/cars', listCars);
app.get('/cars:id', getCar);
app.delete('/cars:id', deleteCar);


// Executar o serviço
app.listen(3000);