import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, hashHistory } from "react-router";

import { addNotes, removeNote } from "../actions/index";
import notesAPI from "../api/notes_API";

class NotesList extends Component {
	constructor(props) {
		super(props);

		this.url = "";
		this.imgTest = /(https?:\/\/.*\.(?:png|jpg|svg|gif))/im;

		this.storedNotes = notesAPI.getNotes();
		this.props.addNotes(this.storedNotes);
	}

	componentDidUpdate() {
		notesAPI.setNotes(this.props.notes);
	}

	renderNotes() {
		return this.props.notes.map((note) => {
			this.imgTest.test(note.text) ? this.url = note.text.match(this.imgTest)[0] : this.url = "";

			return (
				<div className="notes-list__item col-lg-6" key={note.id}>
					<li className="card">
						<img className="note-image card-img-top" src={this.url} alt="" />
						<div className="card-block">
							<p className="card-title">{note.text}</p>
							<p className="note-date">{note.createdAt}</p>
							<button
								className="btn btn-danger"
								onClick={() => this.props.removeNote(note.id)}>
								Delete
							</button>
							<Link to={`/${note.id}`} className="btn btn-warning">Edit</Link>
						</div>
					</li>
				</div>
			);
		});
	}

	render() {
		return (
			<ul className="notes-list row">
				{this.renderNotes()}
			</ul>
		);
	}
}

const mapStateToProps = ({ notes }) => {
	return {notes};
};

export default connect(mapStateToProps, { addNotes, removeNote })(NotesList);
