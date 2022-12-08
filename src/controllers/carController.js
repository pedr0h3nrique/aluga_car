const carModel = require('../models/carModel');
const knex = require('../models/connection');
const { format } = require('date-fns');

const registerCar = async (req, res) => {
    const { brand, model } = req.body

    try {
        await carModel.validate(req.body);
        
        const carRegistered = await knex('cars').insert({
            brand,
            model,
            registration_date: format(new Date(), 'dd-MM-yyyy HH:mm:ss') 
        });

        if (!carRegistered) {
            return res.status(400).json('Não foi possível concluir cadastro.')
        };

        return res.status(201).json('Cadastro realizado com sucesso.');

    } catch (error) {
        return res.status(500).json(error.message);
    };
};

const updateCar = async (req, res) => {
    const { id } = req.params;
    
    try {
        dataForUpdateCharge = await carModel.validate(req.body);
        
        const [carFound] = await knex('cars').where({ id });

        if (!carFound) {
            return res.status(400).json('Carro não encontrado.');
        };

        const [carUpdated] = await knex('cars')
        .where({ id: carFound.id })
        .update(dataForUpdateCharge)
        .returning('*');

    if (!carUpdated) {
        return res.status(400).json('Não foi possível realizar atualização.');
    };

    return res.status(200).json('Carro atualizado com sucesso.');

    } catch (error) {
        return res.status(500).json(error.message);
    };
};

const listCars = async (_, res) => {
    try {
		const cars = await knex('cars');

		return res.json(cars);
	} catch (error) {
		return res.status(500).json(error.message);
	};
};

const getCar = async (req, res) => {
    const { id } = req.params;

    try {
        const [car] = await knex('cars').where({ id });
        
        if (!car) {
            return res.status(400).json('Carro não encontrado.');
        };

        return res.status(200).json(car);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

const deleteCar = async (req, res) => {
    const { id } = req.params;
        
    const [car] = await knex('cars').where({ id });

    if (!car) {
        return res.status(400).json('Não foi possível encontrar o carro.');
    };

    const carDeleted = await knex('cars').where({ id }).del();

    if (!carDeleted) {
      return res.status(400).json('Não foi possível excluir o carro.');
    }

    return res.json('Carro excluído.');
};

module.exports = {
    registerCar,
    updateCar,
    listCars,
    getCar,
    deleteCar
};