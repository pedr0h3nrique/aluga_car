const carModel = require('../models/carModel');
require('../middlewares/carValidation');

class CarController {
    async store(req, res) {
        try {
            await carSchema.validate(req.body, { abortEarly: false });
            
            const existingCar = await carModel.findOne({registration_date: req.body.registration_date});
            
            if(existingCar) {
                return res.status(401).json({error: 'Carro já cadastrado'});
            }
            
            const createdCar = await carModel.create(req.body);

            return res.status(201).json(createdCar);

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
            const cars = await carModel.find();
            
            return res.status(200).json({data: cars});

        } catch (error) {
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    };
    
    async show(req, res) {
        try {
            const { id } = req.params;
            
            const car = await carModel.findById(id);
    
            if (!car) {
                return res.status(404).json({ error: 'Carro não encontrado' });
            };
    
            return res.status(201).json(car);  
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    };
    
    async update(req, res) {
        try {
            await carSchema.validate(req.body, { abortEarly: false });

            const { id } = req.params;       
            
            const existingCar = await carModel.findOne({registration_date: req.body.registration_date})
            
            if(existingCar){
                return res.status(401).json({error: 'Carro já cadastrado'});
            }
            
            const updatedCar = await carModel.findByIdAndUpdate(id, req.body, {new: true});
            
            if(!updatedCar) {
                return res.status(404).json({error: 'Carro não encontrado'});
            } 

            return res.status(200).json({data: updatedCar});          
        
        } catch (error) {
            if (!carUpdated) {
                return res.status(400).json({error: 'Erro de validação', details: error.errors})
            } else{
            return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    }
    
    async destroy(req, res) {
        try {
            const { id } = req.params;
            
            const carDeleted = await carModel.findByIdAndDelete(id);
            
            if (!carDeleted) {
                return res.status(404).json({ message: 'Carro não encontrado' });
            }

            return res.status(200).json({ message: 'Carro excluído' });
 
         } catch (error) {
             return res.status(500).json({ error: 'Erro interno do servidor' });
         }
    };

}

module.exports = new CarController;
