import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TestUtils from "react-addons-test-utils";
import $ from "jquery";
import chai, { expect } from "chai";
import chaiJquery from "chai-jquery";

import reducers from "../src/reducers";

function renderComponent(ComponentClass, props = {}, state = {}) {
	const componentRender =  TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<ComponentClass {...props} />
		</Provider>
	);

	return $(ReactDOM.findDOMNode(componentRender));
}

$.fn.simulate = function(eventName, value) {
	if (value) {
		this.val(value);
	}

	TestUtils.Simulate[eventName](this[0]);
};

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
