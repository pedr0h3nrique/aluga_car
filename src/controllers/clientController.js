const clientModel = require('../models/clientModel');
require('../verify/verifyClients');

class ClientController {
    async store(req, res) {
        try {
            
            await clientModel.validate(req.body);
            
            
            // const clientAlredyCreated = await clientModel.findOne({ cpf });
            // if (clientAlredyCreated) {
            //     return res.status(401).json({ message: 'Client alredy created.' })
            // };
            
            const createdClient = await clientModel.create(req.body);
            
            
            if (!createdClient) {
                return res.status(400).json({ message: 'Unable to create client.' })
            };
            
            return res.status(201).json(createdClient);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    
    async index(req, res) {
        try {
            const clients = await clientModel.find();
            
            return res.status(200).json(clients);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    
    async show(req, res) {
        try {
            const { id } = req.params;
            
            const client = await clientModel.findById(id);
    
            if (!client) {
                return res.status(404).json({ message: 'Client not found.' });
            };
    
            return res.status(201).json(client);  
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    
    async update(req, res) {
        try {
            const { id } = req.params;

            // const clientFound = await clientModel.findById(id);
            
            // if (cpf !== clientFound.cpf) {
            //     const [clientAlredyCreated] = await clientModel.findOne({ cpf });
                
            //     if (clientAlredyCreated) {
            //         return res.status(401).json({ message: 'CPF alredy created.' })
            //     } 
            // };
            
            await clientModel.validate(req.body);
            
            const clientUpdated = await clientModel.findByIdAndUpdate(id, req.body);

            if (!clientUpdated) {
                return res.status(400).json({ message: 'Unable to update client.' })
            };
           
            return res.status(200).json({ message: 'Client updated.' });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }

    }
    
    async destroy(req, res) {
        try {
            const { id } = req.params;
            
            const clientDeleted = await clientModel.findByIdAndDelete(id);
            
            if (!clientDeleted) {
                return res.status(404).json({ message: 'Client not found.' });
            }

            return res.status(200).json({ message: 'Client deleted.' });
 
         } catch (error) {
             return res.status(500).json({ message: error.message });
         }
    };

}

module.exports = new ClientController;
