import { put, call, takeLatest } from 'redux-saga/effects';
import Api from '../api';
import {
	DELETE_FOOD_ERROR,
	DELETE_FOOD_START,
	DELETE_FOOD_SUCCESS,
	GET_FOODS_ERROR,
	GET_FOODS_START,
	GET_FOODS_SUCCESS,
	SAVE_FOOD_ERROR,
	SAVE_FOOD_START,
	SAVE_FOOD_SUCCESS,
	UPDATE_FOOD_ERROR,
	UPDATE_FOOD_START,
	UPDATE_FOOD_SUCCESS,
} from '../constants/food';

function* getFoods() {
	console.log('hola');
	try {
		const result = yield call(Api.getFoods);
		console.log(result);
		yield put({
			type: GET_FOODS_SUCCESS,
			result,
		});
	} catch (error) {
		yield put({ type: GET_FOODS_ERROR });
		console.log(error);
	}
}

function* saveFood(payload) {
	try {
		const result = yield call(Api.saveBusiness, payload.data);
		yield put({
			type: SAVE_FOOD_SUCCESS,
			result: result,
		});
	} catch (error) {
		yield put({ type: SAVE_FOOD_ERROR });
		console.log(error);
	}
}
function* updateFood(payload) {
	try {
		const result = yield call(Api.updateBusiness, payload);
		yield put({
			type: UPDATE_FOOD_SUCCESS,
			result: result,
		});
	} catch (error) {
		yield put({ type: UPDATE_FOOD_ERROR });
		console.log(error);
	}
}
function* deleteFood(payload) {
	try {
		const result = yield call(Api.deleteBusiness, payload._id);
		yield put({
			type: DELETE_FOOD_SUCCESS,
			result: result,
		});
	} catch (error) {
		yield put({ type: DELETE_FOOD_ERROR });
		console.log(error);
	}
}

export default function* business() {
	yield takeLatest(GET_FOODS_START, getFoods);
	yield takeLatest(SAVE_FOOD_START, saveFood);
	yield takeLatest(UPDATE_FOOD_START, updateFood);
	yield takeLatest(DELETE_FOOD_START, deleteFood);
}
