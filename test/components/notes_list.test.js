import { renderComponent, expect } from "../test_helper";
import NotesList from "../../src/components/notes_list";

describe("NotesList", () => {
	let component;

	beforeEach(() => {
		component = renderComponent(NotesList, null, {notes: [{id: 1, text: "Some note"}, {id: 2, text: "Some new note"}]});
	});

	it("show a LI for each note", () => {
		expect(component.find("li").length).to.equal(2);
	});

	it("show each note", () => {
		expect(component).to.contain("Some note");
		expect(component).to.contain("Some new note");
	});
});
