const userController = require('../models/userModel');
require('../verify/verifyClients');

class UserController {
    async store(req, res) {
        try {
            
            await userSchema.validate(req.body, { abortEarly: false });

            const existingUser = await userModel.findOne({registration_date: req.body.registration_date});
            
            if(existingUser) {
                return res.status(401).json({error: 'Usuário já cadastrado'});
            }
            
            const createdUser = await userModel.create(req.body);
            
            return res.status(201).json({data: createdUser});

        } catch (error) {
            if (error.name === 'ValidationError') {
                return res.status(400).json({error: 'Erro de validação', details: error.errors});
            } else {
                return res.status(500).json({ error: 'Erro interno do servidor' });  
            }
        }
    };
    
    async index(req, res) {
        try {
            const users = await userModel.find();
            
            return res.status(200).json({data: users});

        } catch (error) {
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    };
    
    async show(req, res) {
        try {
            const { id } = req.params;
            
            const client = await userModel.findById(id);
    
            if (!client) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            };
    
            return res.status(201).json({data: user});  
        } catch (error) {
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    };
    
    async update(req, res) {
        try {
            await userModel.validate(req.body, { abortEarly: false });

            const { id } = req.params;

            const existingUser = await clientModel.findOne({cpf: req.body.cpf});
                            
            if (existingUser) {
                return res.status(401).json({ message: 'CPF já cadastrado' });
            }
                        
            const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {new: true});

            if (!updatedUser) {
                return res.status(404).json({updatedUser})
            };
           
            return res.status(200).json({ message: 'Usuário editado' });

        } catch (error) {
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }

    }
    
    async destroy(req, res) {
        try {
            const { id } = req.params;
            
            const userDeleted = await userModel.findByIdAndDelete(id);
            
            if (!userDeleted) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            return res.status(200).json({ message: 'Usuário excluído' });
 
         } catch (error) {
             return res.status(500).json({ message: error.message });
         }
    };

}

module.exports = new UserController;
