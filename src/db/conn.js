const mongoose = require('mongoose');


async function main() {
   try {
      mongoose.set('strictQuery', true);

      await mongoose.connect(process.env.DB_URL, 
         {
            useNewUrlParse: true,
            useUnifiedTopology: true,
         });
        
    } catch (error) {
   }
}

module.exports = main;