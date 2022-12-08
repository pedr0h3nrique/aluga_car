const clientModel = require('../models/clientModel');
const knex = require('../models/connection');
const { format } = require('date-fns');

const registerClient = async (req, res) => {
    const {
        name,
        cpf,
        car,
        date_of_birth,        
    } = req.body

    try {
        await clientModel.validate(req.body);

        const clientsList = await knex('clients').where({ cpf });

        for (client of clientsList) {
            if (client.cpf === cpf) {
                return res.status(400).json('O cpf informado já está cadastrado.');
            }
        };

        const [clientRegistered] = await knex('clients').insert({
            name: name.trim(),
            cpf,
            car,
            date_of_birth,
            created_at: format(new Date(), 'dd-MM-yyyy HH:mm:ss') 
        });

        if (!clientRegistered) {
            return res.status(400).json('Não foi possível concluir cadastro.')
        };

        return res.status(201).json('Cadastro realizado com sucesso.');

    } catch (error) {
        return res.status(500).json(error.message);
    };
};

const updateClient = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        cpf,
        car,
        date_of_birth        
    } = req.body;
    
    try {
        dataToUpdate = await clientModel.validate(req.body);
        
        const [clientFound] = await knex('clients').where({ id });

        if (cpf !== clientFound.cpf) {
            const [cpfAlreadyRegistered] = await knex('clients').where({ cpf });

            if (cpfAlreadyRegistered) {
                return res.status(400).json('O cpf informado já está cadastrado.');
            }
        };

        const [clientUpdated] = await knex('clients')
        .where({ id: clientFound.id })
        .update(dataToUpdate)
        .returning('*');

    if (!clientUpdated) {
        return res.status(400).json('Não foi possível realizar atualização');
    };

    return res.status(200).json('Cliente atualizado com sucesso.');

    } catch (error) {
        return res.status(500).json(error.message);
    };
       
};

const listClients = async (_, res) => {
    try {
		const clients = await knex('clients');

		return res.json(clients);
	} catch (error) {
		return res.status(500).json(error.message);
	};
};

const getClient = async (req, res) => {
    const { id } = req.params;

    try {
        const [client] = await knex('clients').where({ id });
        
        if (!client) {
            return res.status(400).json('Cliente não encontrado');
        };

        return res.status(200).json(client);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};

const deleteClient = async (req, res) => {
    const { id } = req.params;
   
    const [client] = await knex('clients').where({ id });

    if (!client) {
        return res.status(400).json('Não foi possível encontrar cliente.');
    };

    const clientDeleted = await knex('clients').where({ id }).del();

    if (!clientDeleted) {
      return res.status(400).json('Não foi possível excluir cliente.');
    }

    return res.json('Cliente excluído.');
};

module.exports = {
    registerClient,
    updateClient,
    listClients,
    getClient,
    deleteClient
};
