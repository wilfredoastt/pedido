import {
	ADD_LIST_PORTIONS,
	CHANGE_FOOD_SELECTED,
	CHANGE_FOOD_TYPE_SELECTED,
	CHANGE_PORTION_SELECTED,
	DELETE_FOOD_START,
	DELETE_PORTION,
	GET_FOODS_START,
	SAVE_FOOD_START,
	SET_PORTIONS_SELECTED_FALSE,
	UPDATE_FOOD_START,
} from '../constants/food';

export const startFoodGet = () => {
	return { type: GET_FOODS_START };
};
export const startFoodSave = (data) => {
	return { type: SAVE_FOOD_START, data };
};
export const startFoodUpdate = (data) => {
	return { type: UPDATE_FOOD_START, data };
};
export const startFoodDelete = (_id) => {
	return { type: DELETE_FOOD_START, _id };
};

// action client
export const changeFoodSelected = (_id) => {
	return { type: CHANGE_FOOD_SELECTED, _id };
};

//cambia typo de plato (ej. de plato de escolar a familiar)
export const changeFoodTypeSelected = (name) => {
	return { type: CHANGE_FOOD_TYPE_SELECTED, name };
};

//seteamos de false una lista de porciones para que no inicie con seleccionado
export const setPortionsSelectedFalse = () => {
	return { type: SET_PORTIONS_SELECTED_FALSE };
};

//cambia el estado de Portion selected = true or false
export const changePortionSelected = (portion) => {
	return { type: CHANGE_PORTION_SELECTED, portion };
};

//add un pedido adicional
export const addListPortionsSelected = () => {
	return { type: ADD_LIST_PORTIONS };
};

//elimina un pedido adicional
export const deletePortion = (portion) => {
	return { type: DELETE_PORTION, portion };
};
