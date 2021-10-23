import {
	ADD_LIST_PORTIONS,
	CHANGE_FOOD_SELECTED,
	CHANGE_FOOD_TYPE_SELECTED,
	CHANGE_PORTION_SELECTED,
	DELETE_PORTION,
	GET_FOODS_ERROR,
	GET_FOODS_SUCCESS,
	SET_PORTIONS_SELECTED_FALSE,
} from '../constants/food';

const ini = {
	food_selected: null,
	food_type_selected: null,
	portions_selected: [],
	portions: [],
	foods: [],
};

const food = (state = ini, action) => {
	switch (action.type) {
		case GET_FOODS_SUCCESS:
			const array_foods = action.result.data;
			if (array_foods.length > 0) {
				return { ...state, food_selected: array_foods[0], foods: array_foods };
			} else {
				return ini;
			}
		case GET_FOODS_ERROR:
			return ini;

		//seleciona o cambia el tipo de Comida
		case CHANGE_FOOD_SELECTED:
			let _id = action._id;
			const food_search = state.foods.find((food) => food._id === _id);
			return {
				...state,
				food_selected: food_search,
				food_type_selected: null,
				portions_selected: [],
				portions: food_search.PORTIONS,
			};
		//seleciona o cambia el tipo de Plato(economico, escolar, etc)
		case CHANGE_FOOD_TYPE_SELECTED:
			let name = action.name;
			const food_type_search = state.food_selected.FOOD_TYPES.find(
				(food_type) => food_type.NAME === name
			);
			return {
				...state,
				food_type_selected: food_type_search,
			};

		// setea de false todos los porciones al inicio
		case SET_PORTIONS_SELECTED_FALSE:
			if (state.food_selected !== null) {
				const portions = state.food_selected.PORTIONS;
				const new_list = portions.map((item) => {
					return { ...item, selected: false };
				});
				return { ...state, portions: new_list };
			} else {
				return state;
			}
		//cambia de portion selected = true/false
		case CHANGE_PORTION_SELECTED:
			const portion = action.portion;
			const portions_list = state.portions.map((item) => {
				if (item._id === portion._id) {
					return { ...item, selected: !item.selected };
				} else {
					return item;
				}
			});
			return {
				...state,
				portions: portions_list,
			};
		//add las porciones de una lista
		case ADD_LIST_PORTIONS:
			const list = [];
			//list.concat(state.portions_selected);
			state.portions_selected.forEach((element) => {
				list.push(element);
			});

			state.portions.forEach((element) => {
				if (element.selected) {
					const portion_find = state.portions_selected.find(
						(portion) => portion._id === element._id
					);
					if (portion_find === undefined) {
						delete element.selected;
						list.push(element);
					}
				}
			});
			return {
				...state,
				portions_selected: list,
			};
		case DELETE_PORTION:
			const portion_delete = action.portion;
			const list_deleted = state.portions_selected.filter(
				(portion) => portion._id !== portion_delete._id
			);
			return {
				...state,
				portions_selected: list_deleted,
			};

		default:
			return state;
	}
};
export default food;
