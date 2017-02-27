export default {
	setNotes(notes) {
		if (Array.isArray(notes)) {
			localStorage.setItem("notes", JSON.stringify(notes));
			return notes;
		}
	},

	getNotes() {
		const stringNotes = localStorage.getItem("notes");
		let allNotes = [];

		try {
			allNotes = JSON.parse(stringNotes);
		} catch(e) {
			const message = e;
		}

		return Array.isArray(allNotes) ? allNotes : [];
	}
};
