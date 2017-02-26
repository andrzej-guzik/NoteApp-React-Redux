import {ADD_NOTE} from "../actions/types";

export const notesReducer = (state = [], action) => {
	switch (action.type) {
		
	case ADD_NOTE:
		return [action.payload, ...state];

	default:
		return state;
	}
};
