import {ADD_NOTE} from "./types";

export const addNote = (note) => {
	return {
		type: ADD_NOTE,
		payload: note
	};
};
