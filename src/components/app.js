import React, { Component } from "react";

import AddNoteBar from "./add_note_bar";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Notes App</h1>
				<AddNoteBar />
				{this.props.children}
			</div>
		);
	}
}
