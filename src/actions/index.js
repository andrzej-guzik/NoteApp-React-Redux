import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from "./types";

export const addNote = (note) => {
	return {
		type: ADD_NOTE,
		payload: note
	};
};

export const editNote = (note) => {
	return {
		type: EDIT_NOTE,
		payload: note
	};
};

export const removeNote = (id) => {
	return {
		type: REMOVE_NOTE,
		payload: id
	};
};
