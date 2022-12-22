const carModel = require('../models/carModel');
const knex = require('../verify/verifyCar');

class carController {
    async store(req, res) {
        try {
            await carModel.validate(req.body);
            
            // const carAlredyCreated = await carModel.findOne({ registration_date });
            
            // if (carAlredyCreated) {
            //     return res.status(401).json({ message: 'Car alredy created.' })
            // };
            
            const createdCar = await carModel.create(req.body);

            if (!createdCar) {
                return res.status(400).json({ message: 'Unable to create car.' })
            };
            
            return res.status(201).json(createdCar);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    
    async index(req, res) {
        try {
            const cars = await carModel.find();
            
            return res.status(200).json(cars);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    
    async show(req, res) {
        try {
            const { id } = req.params;
            
            const car = await carModel.findById(id);
    
            if (!car) {
                return res.status(404).json({ message: 'Car not found.' });
            };
    
            return res.status(201).json(car);  
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    
    async update(req, res) {
        try {
            const { id } = req.params;

            const carFound = await carModel.findById(id);
            
            // if (registration_date !== carFound.registration_date) {
            //     const [carAlredyCreated] = await carModel.findOne({ car });
                
            //     if (carAlredyCreated) {
            //         return res.status(401).json({ message: 'Car alredy created.' })
            //     } 
            // };
            
            await carModel.validate(req.body);
            
            const carUpdated = await carModel.findByIdAndUpdate(id, req.body);

            if (!carUpdated) {
                return res.status(400).json({ message: 'Unable to update car.' })
            };
           
            return res.status(200).json({ message: 'Car updated.' });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }

    }
    
    async destroy(req, res) {
        try {
            const { id } = req.params;
            
            const carDeleted = await carModel.findByIdAndDelete(id);
            
            if (!carDeleted) {
                return res.status(404).json({ message: 'Car not found.' });
            }

            return res.status(200).json({ message: 'Car deleted.' });
 
         } catch (error) {
             return res.status(500).json({ message: error.message });
         }
    };

}

module.exports = new carController;
