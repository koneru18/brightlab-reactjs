import React, { Component } from 'react';
import Editor from '../../components/editor';

class Dashboard extends Component {
	constructor () {
		super();
		this.handleContentChange = this.handleContentChange.bind(this);
    this.state = {
      content: "Example text"
    };
	}

	handleContentChange = (e) => {
		console.log(e);
	}

	render() {
		return (
			<div className="App">
				Hello Dashboard

				<Editor
					content={this.state.content}
					handleContentChange={this.handleContentChange}
					initializeEditor={true}
					destroyEditor={false}
				/>
			</div>
		);
	}
}

/* // Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg'; */

/* class Dashboard extends Component {
	render() {
		return (
			<div className="App">
				Hello Dashboard

				<FroalaEditor tag='textarea' />
			</div>
		);
	}
} */

export default Dashboard;