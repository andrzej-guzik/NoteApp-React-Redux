import React, {Component} from "react";
import {connect} from "react-redux";

import {addNote} from "../actions/index";
import {currentDate} from "../helpers";

class AddNoteBar extends Component {
	constructor(props) {
		super(props);

		this.state = { text: "" };

		this.onTextChange = this.onTextChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	generateId() {
		return Math.random().toString(36).substr(2, 16);
	}

	onTextChange(event) {
		this.setState({
			text: event.target.value
		});
	}

	onFormSubmit(event) {
		event.preventDefault();

		const {text} = this.state;
		const id = this.generateId();
		const createdAt = currentDate();

		if (text.length > 0) {
			this.props.addNote({ id, text, createdAt });
			this.setState({
				text: ""
			});
		}
	}

	render() {
		return (
			<div className="add-note-bar col-lg-8 offset-lg-2">
				<form  onSubmit={this.onFormSubmit}>
					<textarea
						className="form-control"
						placeholder="Enter your note"
						value={this.state.text}
						onChange={this.onTextChange}/>
					<button type="submit" className="add-note-bar__btn btn btn-primary">Add note</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { addNote })(AddNoteBar);
