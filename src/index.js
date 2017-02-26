import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, hashHistory } from "react-router";

import routes from "./routes";
import reducers from "./reducers";
import App from "./components/app";

import "./style.css";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
		document.querySelector(".container"));
