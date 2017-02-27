import { renderComponent, expect } from "../test_helper";
import NoteEdit from "../../src/components/note_edit";

describe("NoteEdit", () => {
	let component;

	beforeEach(() => {
		const notes = {notes: [{id: "abc123", text: "Some note"}]};
		const props = {params: {id: "abc123"}};
		component = renderComponent(NoteEdit, props, notes);
	});

	it("has a correct class", () => {
		expect(component).to.have.class("note-edit");
	});

	describe("entering text", () => {
		it("show the note text in the textarea", () => {
			expect(component.find("textarea")).to.have.value("Some note");
		});

		it("change note text", () => {
			component.find("textarea").simulate("change", "New note");
			expect(component.find("textarea")).to.have.value("New note");
		});

		it("clear the textarea when submitted", () => {
			component.find("form").simulate("submit");
			expect(component.find("textarea")).to.have.value("");
		});
	});
});
