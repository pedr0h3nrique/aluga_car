const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const carsSchema = new Schema({
    id: ObjectId,
    brand: String,
    model: String,
    registration_date: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const carModel =  mongoose.model('cars', carsSchema);

module.exports = carModel;
