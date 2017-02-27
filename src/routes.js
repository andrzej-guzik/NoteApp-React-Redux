import React from "react";
import {Route, IndexRoute} from "react-router";

import App from "./components/app";
import NoteEdit from "./components/note_edit";

export default (
	<Route path="/" component={App}>
		<Route path=":id" component={NoteEdit} />
	</Route>
);
