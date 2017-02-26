import { expect } from "../test_helper";
import { ADD_NOTE } from "../../src/actions/types";
import {notesReducer} from "../../src/reducers/notes";

describe("Notes Reducer", () => {
	it("handles action with unknown type", () => {
		expect(notesReducer(undefined, {})).to.eql([]);
	});

	it("handles action of type ADD_NOTE", () => {
		const action = { type: ADD_NOTE, payload: "new note"};
		expect(notesReducer([], action)).to.eql(["new note"]);
	});
});
