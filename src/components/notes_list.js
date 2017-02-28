import React, { Component } from "react";
import { connect } from "react-redux";

import { addNotes } from "../actions/index";
import notesAPI from "../api/notes_API";
import Note from "./note";

class NotesList extends Component {
	constructor(props) {
		super(props);

		this.storedNotes = notesAPI.getNotes();
		this.props.addNotes(this.storedNotes);
	}

	componentDidUpdate() {
		notesAPI.setNotes(this.props.notes);
	}

	renderNotes() {
		return this.props.notes.map((note) => {
			return (
				<Note key={note.id} note={note} />
			);
		});
	}

	render() {
		return (
			<ul className="notes-list">
				{this.renderNotes()}
			</ul>

		);
	}
}

const mapStateToProps = ({ notes }) => {
	return {notes};
};

export default connect(mapStateToProps, { addNotes })(NotesList);
