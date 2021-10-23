const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
const router = require('./router.js');

const { mongoose } = require('./database.js');
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.disable('x-powered-by');
app.use(cors());

//routes
router(app);

//ADD THIS FOR DEPLOY
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client', 'build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
//setting
app.set('port', process.env.PORT || 5000);
//server

app.listen(app.get('port'), () => {
	console.log('server on port ', app.get('port'));
});
