const Food = require('../models/food_model');

let foodController = {
	getFoods: async (req, res) => {
		try {
			const foods = await Food.find();
			res.status(200).send({
				status: 200,
				data: foods,
				message: 'Platos correctamente cargados.',
			});
		} catch (err) {
			res
				.status(400)
				.send({ status: 400, data: [], message: 'Ocurrió algún error.' })
				.json();
		}
	},
	saveFood: async (req, res) => {
		try {
			const food_data = req.body.food_data;
			let food_name = await Food.findOne({ NAME: food_data.NAME });
			console.log(food_name);
			if (!food_name) {
				const food = new Food(food_data);
				await food.save((err, saved_food) => {
					if (err || !saved_food) {
						return res.send({
							status: 400,
							data: null,
							message: 'Ocurrió algún error al guardar.',
						});
					} else {
						return res.send({
							status: 200,
							data: saved_food,
							message: 'Guardado correctamente.',
						});
					}
				});
			} else {
				return res.send({
					status: 202,
					data: null,
					message: 'Plato ya existe con el mismo nombre.',
				});
			}
		} catch (error) {
			return res.send({
				status: 400,
				data: null,
				message: 'Ocurrió algún error.',
			});
		}
	},
	updateFood: async (req, res) => {
		try {
			let _id = req.params._id;
			const food_data = req.body.food_data;
			Food.findByIdAndUpdate(
				_id,
				food_data,
				{ new: true },
				(err, update_food) => {
					if (err)
						return res.send({
							status: 400,
							data: null,
							message: 'Ocurrió algún error al actualizar.',
						});
					if (!update_food)
						return res.send({
							status: 202,
							data: null,
							message: 'Verique que exista el plato.',
						});
					return res.send({
						status: 200,
						data: update_food,
						message: 'Actualizado correctamente.',
					});
				}
			);
		} catch (error) {
			return res.send({
				status: 400,
				data: null,
				message: 'Ocurrió algún error.',
			});
		}
	},
	deleteFood: async (req, res) => {
		try {
			let _id = req.params._id;
			console.log(_id);
			Food.findByIdAndRemove(_id, (error, food_deleted) => {
				console.log(error);
				if (error)
					return res.send({
						status: 400,
						data: null,
						message: 'Ocurrió algún error al eliminar plato.',
					});
				if (food_deleted) {
					return res.send({
						status: 200,
						data: food_deleted,
						message: 'Eliminado correctamente plato.',
					});
				} else {
					return res.send({
						status: 202,
						data: null,
						message: 'Verifique que exista el plato.',
					});
				}
			});
		} catch (error) {
			return res.send({
				status: 400,
				data: null,
				message: 'Ocurrió algún error.',
			});
		}
	},
};

module.exports = foodController;
