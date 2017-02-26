import { expect } from "../test_helper";
import { ADD_NOTE } from "../../src/actions/types";
import { addNote } from "../../src/actions/index";

describe("actions", () => {
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
});
