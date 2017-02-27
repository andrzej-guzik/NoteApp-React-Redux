import { renderComponent, expect } from "../test_helper";
import App from "../../src/components/app";

describe("App", () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it("show the correct text", () => {
		expect(component).to.contain("Note App");
	});

	it("show a AddNoteBar", () => {
		expect(component.find(".add-note-bar")).to.exist;
	});

	it("show a NotesList", () => {
		expect(component.find(".notes-list")).to.exist;
	});
});
