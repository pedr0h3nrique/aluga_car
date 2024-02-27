const yup = require('./config');
const { string, date } = require('yup');

const schema = yup.object().shape({
	brand: string().required(),
	model: string().required(),
	registration_date: date(),
	updated_at: date()
});

module.exports = schema;