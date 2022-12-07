const yup = require('./config');
const { string } = require('yup');

const schema = yup.object().shape({
	name: string().required().min(3),
	cpf: string().required().min(11),
	car: string().required(),
	date_of_birth: string().required().min(10),
	created_at: string()
});

module.exports = schema;