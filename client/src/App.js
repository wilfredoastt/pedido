import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import appTodo from './redux/reducers/index';

import rootSaga from './redux/sagas';
import createSagaMiddleware from 'redux-saga';

//import { composeWithDevTools } from 'redux-devtools-extension';
import Food from './components/Food';

const sagaMiddleware = createSagaMiddleware();

/*const store = createStore(
	appTodo,
	compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
);
*/

const store = createStore(appTodo, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const App = () => {
	return (
		<Provider store={store}>
			<Food />
		</Provider>
	);
};

export default App;
