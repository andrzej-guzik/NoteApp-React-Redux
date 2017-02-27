import React, { Component } from "react";

import AddNoteBar from "./add_note_bar";
import NotesList from "./notes_list";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Note App</h1>
				<AddNoteBar />
				{this.props.children}
				<NotesList />
			</div>
		);
	}
}
