import { expect } from "../test_helper";
import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from "../../src/actions/types";
import { notesReducer } from "../../src/reducers/notes";

describe("Notes Reducer", () => {
	it("handles action with unknown type", () => {
		expect(notesReducer(undefined, {})).to.eql([]);
	});

	it("handle ADD_NOTE action", () => {
		const action = {type: ADD_NOTE, payload: "new note"};
		expect(notesReducer([], action)).to.eql(["new note"]);
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
