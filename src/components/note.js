import React, { Component } from "react";
import { connect } from "react-redux";

import { editNote, removeNote } from "../actions/index";
import { currentDate } from "../helpers";

class Note extends Component {
	constructor(props) {
		super(props);

		this.state = { isEdit: false, text: this.props.note.text };

		this.onEdit = this.onEdit.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

		this.url = "";
		this.imgTest = /(https?:\/\/.*\.(?:png|jpg|svg|gif))/im;
	}

	onEdit() {
		this.setState({
			isEdit: true,
			text: this.props.note.text
		});
	}

	onCancel() {
		this.setState({
			isEdit: false
		});
	}

	onTextChange(event) {
		this.setState({
			text: event.target.value
		});
	}

	onFormSubmit(event) {
		event.preventDefault();

		const { text } = this.state;
		const { id } = this.props.note;
		const createdAt = currentDate();

		if (text.length > 0) {
			this.props.editNote({ id, text, createdAt });
			this.setState({
				text: "",
				isEdit: false
			});
		}
	}

	renderNote() {
		this.imgTest.test(this.props.note.text) ? this.url = this.props.note.text.match(this.imgTest)[0] : this.url = "";

		if(!this.state.isEdit) {
			return (
				<div className="note__item">
					<img className="" src={this.url} alt="" />
					<p className="note-text">{this.props.note.text}</p>
					<p className="note-date">Created: <br/> {this.props.note.createdAt}</p>
					<div className="btn-group">
						<button
							className="btn btn--danger"
							onClick={() => this.props.removeNote(this.props.note.id)}>
							Delete
						</button>
						<button id="btn-edit" className="btn btn--warning" onClick={this.onEdit}>Edit</button>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<form onSubmit={this.onFormSubmit}>
						<label for="edit-textarea">Edit note:</label>
						<textarea id="edit-textarea" value={this.state.text} onChange={this.onTextChange} />
						<button className="btn btn--succes" onClick={this.onAccept}>Accept</button>
					</form>
					<button className="btn btn--info" onClick={this.onCancel}>Cancel</button>
				</div>
			);
		}
	}

	render() {
		return (
			<li className="note">
				{this.renderNote()}
			</li>
		);
	}
}

export default connect(null, { editNote, removeNote })(Note);
