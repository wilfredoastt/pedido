const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
	NAME: {
		type: String,
		trim: true,
		required: true,
	},
	FOOD_TYPES: [
		{
			NAME: {
				type: String,
				trim: true,
				required: true,
			},
			PRICE_UNIT: {
				type: Number,
				required: true,
				trim: true,
			},
			URL_IMG: {
				type: String,
				required: true,
				trim: true,
			},
			DESCRIPTION: {
				type: String,
				required: true,
				trim: true,
			},
		},
	],
	PORTIONS: [
		{
			NAME: {
				type: String,
				required: true,
				trim: true,
			},
			PRICE_UNIT: {
				type: Number,
				required: true,
				trim: true,
			},
			URL_IMG: {
				type: String,
				required: true,
				trim: true,
			},
			DESCRIPTION: {
				type: String,
				required: true,
				trim: true,
			},
		},
	],
});
module.exports = mongoose.model('Food', FoodSchema);
