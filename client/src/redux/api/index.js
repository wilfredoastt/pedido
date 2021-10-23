const axios = require('axios');
const Api = {
	getFoods: async () => {
		return await axios.get('/pedido/foods').then((response) => response.data);
	},
	saveFood: async (data) => {
		return await axios
			.post('/pedido/save-food', data)
			.then((response) => response.data);
	},
	updateFood: async (payload) => {
		return await axios
			.put('/pedido/update-food/' + payload._id, payload.data)
			.then((response) => response.data);
	},
	deleteFood: async (_id) => {
		return await axios
			.delete('/pedido/delete-food/' + _id)
			.then((response) => response.data);
	},
};
export default Api;
