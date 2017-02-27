import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from "../actions/types";

export const notesReducer = (state = [], action) => {

	switch (action.type) {

	case ADD_NOTE:
		return [action.payload, ...state];

	case EDIT_NOTE:
		var notes = state.filter(note => note.id !== action.payload.id);
		return [action.payload, ...notes];

	case REMOVE_NOTE:
		return state.filter(note => note.id !== action.payload);

	default:
		return state;
	}
};
