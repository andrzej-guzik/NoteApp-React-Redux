webpackJsonp([1,2],{101:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADD_NOTE="ADD_NOTE",t.EDIT_NOTE="EDIT_NOTE",t.REMOVE_NOTE="REMOVE_NOTE",t.ADD_NOTES="ADD_NOTES"}).call(this)}finally{}},102:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.currentDate=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),o=e.getHours(),a=e.getMinutes(),i=e.getSeconds();return r<10&&(r="0"+r),n<10&&(n="0"+n),i<10&&(i="0"+i),a<10&&(a="0"+a),r+"/"+n+"/"+t+" "+o+":"+a+":"+i},t.scrollToTop=function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.scrollBy(0,-100),setTimeout(e,10))}}).call(this)}finally{}},124:function(e,t){},125:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),l=e(u),c=n(220),s=e(c),f=n(222),d=e(f),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("section",{className:"site-wrapper"},l.default.createElement("h1",{className:"app__title"},"Note App"),l.default.createElement(s.default,null),l.default.createElement(d.default,null))}}]),t}(u.Component);t.default=p}).call(this)}finally{}},126:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(27),r=n(223),o=(0,e.combineReducers)({notes:r.notesReducer});t.default=o}).call(this)}finally{}},219:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={setNotes:function(e){if(Array.isArray(e))return localStorage.setItem("notes",JSON.stringify(e)),e},getNotes:function(){var e=localStorage.getItem("notes"),t=[];try{t=JSON.parse(e)}catch(e){}return Array.isArray(t)?t:[]}}}).call(this)}finally{}},220:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),l=e(u),c=n(17),s=n(64),f=n(102),d=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={text:""},n.onTextChange=n.onTextChange.bind(n),n.onFormSubmit=n.onFormSubmit.bind(n),n}return a(t,e),i(t,[{key:"generateId",value:function(){return Math.random().toString(36).substr(2,16)}},{key:"onTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault();var t=this.state.text,n=this.generateId(),r=(0,f.currentDate)();t.length>0&&(this.props.addNote({id:n,text:t,createdAt:r}),this.setState({text:""}))}},{key:"render",value:function(){return l.default.createElement("div",{className:"add-note-bar"},l.default.createElement("form",{className:"add-note-bar__form",onSubmit:this.onFormSubmit},l.default.createElement("label",{for:"note-textarea"},"Enter your note"),l.default.createElement("textarea",{id:"note-textarea",value:this.state.text,onChange:this.onTextChange}),l.default.createElement("button",{type:"submit",className:"btn"},"Add note")))}}]),t}(u.Component);t.default=(0,c.connect)(null,{addNote:s.addNote})(d)}).call(this)}finally{}},221:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),l=e(u),c=n(17),s=n(64),f=n(102),d=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isEdit:!1,text:n.props.note.text},n.onEdit=n.onEdit.bind(n),n.onCancel=n.onCancel.bind(n),n.onTextChange=n.onTextChange.bind(n),n.onFormSubmit=n.onFormSubmit.bind(n),n.url="",n.imgTest=/(https?:\/\/.*\.(?:png|jpg|svg|gif))/im,n}return a(t,e),i(t,[{key:"onEdit",value:function(){this.setState({isEdit:!0,text:this.props.note.text})}},{key:"onCancel",value:function(){this.setState({isEdit:!1})}},{key:"onTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault();var t=this.state.text,n=this.props.note.id,r=(0,f.currentDate)();t.length>0&&(this.props.editNote({id:n,text:t,createdAt:r}),this.setState({text:"",isEdit:!1}))}},{key:"renderNote",value:function(){var e=this;return this.imgTest.test(this.props.note.text)?this.url=this.props.note.text.match(this.imgTest)[0]:this.url="",this.state.isEdit?l.default.createElement("div",null,l.default.createElement("form",{onSubmit:this.onFormSubmit},l.default.createElement("label",{for:"edit-textarea"},"Edit note:"),l.default.createElement("textarea",{id:"edit-textarea",value:this.state.text,onChange:this.onTextChange}),l.default.createElement("button",{className:"btn btn--succes",onClick:this.onAccept},"Accept")),l.default.createElement("button",{className:"btn btn--info",onClick:this.onCancel},"Cancel")):l.default.createElement("div",{className:"note__item"},l.default.createElement("img",{className:"",src:this.url,alt:""}),l.default.createElement("p",{className:"note-text"},this.props.note.text),l.default.createElement("p",{className:"note-date"},"Created: ",l.default.createElement("br",null)," ",this.props.note.createdAt),l.default.createElement("div",{className:"btn-group"},l.default.createElement("button",{className:"btn btn--danger",onClick:function(){return e.props.removeNote(e.props.note.id)}},"Delete"),l.default.createElement("button",{id:"btn-edit",className:"btn btn--warning",onClick:this.onEdit},"Edit")))}},{key:"render",value:function(){return l.default.createElement("li",{className:"note"},this.renderNote())}}]),t}(u.Component);t.default=(0,c.connect)(null,{editNote:s.editNote,removeNote:s.removeNote})(d)}).call(this)}finally{}},222:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),l=e(u),c=n(17),s=n(64),f=n(219),d=e(f),p=n(221),y=e(p),b=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.storedNotes=d.default.getNotes(),n.props.addNotes(n.storedNotes),n}return a(t,e),i(t,[{key:"componentDidUpdate",value:function(){d.default.setNotes(this.props.notes)}},{key:"renderNotes",value:function(){return this.props.notes.map(function(e){return l.default.createElement(y.default,{key:e.id,note:e})})}},{key:"render",value:function(){return l.default.createElement("ul",{className:"notes-list"},this.renderNotes())}}]),t}(u.Component),h=function(e){var t=e.notes;return{notes:t}};t.default=(0,c.connect)(h,{addNotes:s.addNotes})(b)}).call(this)}finally{}},223:function(e,t,n){try{(function(){"use strict";function e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.notesReducer=void 0;var r=n(101);t.notesReducer=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];switch(n.type){case r.ADD_NOTE:return[n.payload].concat(e(t));case r.ADD_NOTES:return[].concat(e(n.payload),e(t));case r.EDIT_NOTE:var o=t.filter(function(e){return e.id!==n.payload.id});return[n.payload].concat(e(o));case r.REMOVE_NOTE:return t.filter(function(e){return e.id!==n.payload});default:return t}}}).call(this)}finally{}},268:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=n(3),r=e(t),o=n(41),a=e(o),i=n(17),u=n(27),l=n(126),c=e(l),s=n(125),f=e(s);n(124);var d=(0,u.applyMiddleware)()(u.createStore);a.default.render(r.default.createElement(i.Provider,{store:d(c.default)},r.default.createElement(f.default,null)),document.querySelector(".app"))}).call(this)}finally{}},64:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeNote=t.editNote=t.addNotes=t.addNote=void 0;var e=n(101);t.addNote=function(t){return{type:e.ADD_NOTE,payload:t}},t.addNotes=function(t){return{type:e.ADD_NOTES,payload:t}},t.editNote=function(t){return{type:e.EDIT_NOTE,payload:t}},t.removeNote=function(t){return{type:e.REMOVE_NOTE,payload:t}}}).call(this)}finally{}}},[268]);