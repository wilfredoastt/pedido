const mongoose = require('mongoose');

//mongo Atlas
const URI =
	'mongodb+srv://wilfredo:wilfredo@catalogo-database.fyanw.mongodb.net/pedido?retryWrites=true&w=majority';

mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	.then((db) => console.log('db conectado'))
	.catch((err) => console.error(err));
