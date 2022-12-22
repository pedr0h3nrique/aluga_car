const mongoose = require('mongoose');


async function main() {
   try {
      mongoose.set('strictQuery', true);

      await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kliohud.mongodb.net/?retryWrites=true&w=majority`);
        
    } catch (error) {
   }
}

module.exports = main;