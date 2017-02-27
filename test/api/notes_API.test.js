import { expect } from "../test_helper";
import notesAPI from "../../src/api/notes_API";

describe("NotesAPI", () => {
	beforeEach(() => {
		localStorage.removeItem("notes");
	});

	it("set valid notes array", () => {
		const notes = [
			{id: "123abc", text: "Some note"},
			{id: "123bcd", text: "Some note 2"},
			{id: "123cde", text: "Some note 3"}
		];

		notesAPI.setNotes(notes);
		const actualNotes = JSON.parse(localStorage.getItem("notes"));

		expect(actualNotes).to.eql(notes);
	});

	it("not set invalid notes array", () => {
		const invalidNotes = {note: "invalid note"};

		notesAPI.setNotes(invalidNotes);

		expect(localStorage.getItem("notes")).to.equal(null);
	});
});
