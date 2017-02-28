import { renderComponent, expect } from "../test_helper";
import Note from "../../src/components/note";

describe("Note", () => {
	let component;

	beforeEach(() => {
		const initialState = {notes: [{id: "abc123", text: "Some note"}]};
		const props = {note: {id: "abc123", text: "Some note"}};
		component = renderComponent(Note, props, initialState);
	});

	it("has a correct class", () => {
		expect(component).to.have.class("note");
	});

	describe("entering text", () => {
		beforeEach(() => {
			component.find("#btn-edit").simulate("click");
		});

		it("show the note text in the textarea", () => {
			expect(component.find("textarea")).to.have.value("Some note");
		});

		it("change note text", () => {
			component.find("textarea").simulate("change", "New note");
			expect(component.find("textarea")).to.have.value("New note");
		});
	});
});
