import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import { connect } from "react-redux";

import { editNote } from "../actions/index";
import { currentDate, scrollToTop } from "../helpers";

class NoteEdit extends Component {
	constructor(props) {
		super(props);

		this.note = {};
		this.state = { text: "" };

		this.onTextChange = this.onTextChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

		scrollToTop();
	}

	componentWillMount() {
		this.note = this.props.notes.find(note => note.id === this.props.params.id);
		this.setState({
			text: this.note.text
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
		const id = this.note.id;
		const createdAt = currentDate();

		if (text.length > 0) {
			this.props.editNote({ id, text, createdAt });
			this.setState({
				text: ""
			});
			hashHistory.push("/");
		}
	}

	render() {
		return (
			<div className="note-edit col-lg-8 offset-lg-2">
				<h3>Edit note: </h3>
				<form onSubmit={this.onFormSubmit}>
					<textarea
						className="form-control"
						value={ this.state.text }
						onChange={ this.onTextChange }/>
					<button type="submit" className="btn btn-success">Accept Changes</button>
					<Link to="/" className="btn btn-warning">Cancel</Link>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ notes }) => {
	return {notes};
};

export default connect(mapStateToProps, { editNote })(NoteEdit);
