import { expect } from "../test_helper";
import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from "../../src/actions/types";
import { addNote, editNote, removeNote } from "../../src/actions/index";

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
