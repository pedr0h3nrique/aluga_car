const yup = require('./config');
const { string } = require('yup');

const schema = yup.object().shape({
	brand: string().required(),
	model: string().required(),
	registration_date: string()
});

module.exports = schema;