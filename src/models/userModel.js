const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: ObjectId,
    name: String,
    cpf: Number,
    car: ObjectId,
    date_of_birth: Date,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const userModel =  mongoose.model('user', userSchema);

module.exports = userModel;