import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import config from '../editor/config';

// https://github.com/froala/react-froala-wysiwyg/blob/master/demo/src/manual_initialization.jsx

class Editor extends Component {
	constructor () {
    super();
		this.handleController = this.handleController.bind(this);
		// this.initializeEditor = this.initializeEditor.bind(this);
    this.destroyEditor = this.destroyEditor.bind(this);
    this.state = {
      initControls: null
    };
	}

	/* static getDerivedStateFromProps(nextProps, prevState) {
		console.log(JSON.stringify(nextProps));
		console.log(JSON.stringify(prevState));
		return null;
	} */

	handleController (initControls) {
    this.setState({initControls: initControls});
  }
	
	initializeEditor () {
    this.state.initControls.initialize();
    this.setState({initControls: this.state.initControls});
  }

  destroyEditor () {
    this.state.initControls.destroy();
    this.setState({initControls: this.state.initControls});
  }

	render() {
		return (
			<FroalaEditor 
				tag="textarea"
				config={config}
				model={this.props.content}
				onModelChange={this.props.handleContentChange}
				// onManualControllerReady={this.handleController}
			/>
		);
	}
}

Editor.propTypes = {
	content: PropTypes.string,
	handleContentChange: PropTypes.func,
	initializeEditor: PropTypes.bool,
	destroyEditor: PropTypes.bool
};

export default Editor;