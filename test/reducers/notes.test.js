import { expect } from "../test_helper";
import { ADD_NOTE, ADD_NOTES, EDIT_NOTE, REMOVE_NOTE } from "../../src/actions/types";
import { notesReducer } from "../../src/reducers/notes";

describe("Notes Reducer", () => {
	it("handles action with unknown type", () => {
		expect(notesReducer(undefined, {})).to.eql([]);
	});

	it("handle ADD_NOTE action", () => {
		const action = {type: ADD_NOTE, payload: "new note"};
		expect(notesReducer([], action)).to.eql(["new note"]);
	});

	it("handle ADD_NOTES action", () => {
		const notes = [{id: "123aaa", text: "Some note"}, {id: "123bbb", text: "New note"}];
		const action = {type: ADD_NOTES, payload: notes};
		expect(notesReducer([], action)).to.eql(notes);
	});

	it("handle EDIT_NOTE action", () => {
		const note = {id: 1, text: "old note"};
		const action = {type: EDIT_NOTE, payload: {id: 1, text: "new note"}};
		expect(notesReducer([note], action)).to.eql([{id: 1, text: "new note"}]);
	});

	it("handle REMOVE_NOTE action", () => {
		const note = {id: 1, text: "some note"};
		const action = {type: REMOVE_NOTE, payload: 1};
		expect(notesReducer([note], action)).to.eql([]);
	});
});
