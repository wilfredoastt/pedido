const RoutesFood = require('./routes/routes_food');

const router = (app) => {
	app.use('/pedido', RoutesFood);
};

module.exports = router;
