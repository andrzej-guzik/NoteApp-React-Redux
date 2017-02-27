import { ADD_NOTE, ADD_NOTES, EDIT_NOTE, REMOVE_NOTE } from "./types";

export const addNote = (note) => {
	return {
		type: ADD_NOTE,
		payload: note
	};
};

export const addNotes = (notes) => {
	return {
		type: ADD_NOTES,
		payload: notes
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
