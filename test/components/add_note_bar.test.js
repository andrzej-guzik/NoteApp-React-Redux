import { renderComponent, expect } from "../test_helper";
import AddNoteBar from "../../src/components/add_note_bar";

describe("AddNoteBar", () => {
	let component;

	beforeEach(() => {
		component = renderComponent(AddNoteBar);
	});

	it("has a correct class", () => {
		expect(component).to.have.class("add-note-bar");
	});

	describe("entering text", () => {
		beforeEach(() => {
			component.find("textarea").simulate("change", "new note");
		});

		it("shows the text in the textarea", () => {
			expect(component.find("textarea")).to.have.value("new note");
		});

		it("clear the input when submitted", () => {
			component.find("form").simulate("submit");
			expect(component.find("textarea")).to.have.value("");
		});
	});
});
