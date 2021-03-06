import React, { Component } from "react";

import AddNoteBar from "./add_note_bar";
import NotesList from "./notes_list";

export default class App extends Component {
	render() {
		return (
			<section className="site-wrapper">
				<h1 className="app__title">Note App</h1>
				<AddNoteBar />
				<NotesList />
			</section>
		);
	}
}
