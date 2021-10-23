import { combineReducers } from 'redux';
import food from './food';
const todoApp = combineReducers({
	food,
});

export default todoApp;
