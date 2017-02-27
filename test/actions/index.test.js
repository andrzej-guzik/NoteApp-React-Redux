import { expect } from "../test_helper";
import { ADD_NOTE, ADD_NOTES, EDIT_NOTE, REMOVE_NOTE } from "../../src/actions/types";
import { addNote, addNotes, editNote, removeNote } from "../../src/actions/index";

describe("Actions", () => {
	describe("addNote", () => {
		it("has a correct type", () => {
			const action = addNote();
			expect(action.type).to.equal(ADD_NOTE);
		});

		it("has a correct payload", () => {
			const action = addNote("Do testing");
			expect(action.payload).to.equal("Do testing");
		});
	});

	describe("addNotes", () => {
		it("has a correct type", () => {
			const action = addNotes();
			expect(action.type).to.equal(ADD_NOTES);
		});

		it("has a correct payload", () => {
			const notes = [{id: "abc123", text: "Some note"}, {id: "abc1234", text: "New note"}];
			const action = addNotes(notes);
			expect(action.payload).to.equal(notes);
		});
	});

	describe("editNote", () => {
		let action;

		beforeEach(() => {
			action = editNote("123");
		});

		it("has a correct type", () => {
			expect(action.type).to.equal(EDIT_NOTE);
		});

		it("has a correct payload", () => {
			expect(action.payload).to.equal("123");
		});
	});

	describe("removeNote", () => {
		let action;

		beforeEach(() => {
			action = editNote("123");
		});

		it("has a correct type", () => {
			expect(action.type).to.equal(EDIT_NOTE);
		});

		it("has a correct payload", () => {
			expect(action.payload).to.equal("123");
		});
	});
});
