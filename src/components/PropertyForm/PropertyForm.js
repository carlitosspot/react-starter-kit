/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PropertyForm.css';
import TextEditor from '../TextEditor';

class PropertyForm extends React.Component {
  static propTypes = {
    apartment: PropTypes.object, // eslint-disable-line
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEditorContentChange = this.onEditorContentChange.bind(this);

    const { apartment } = this.props;
    const {
      name = '',
      address = '',
      wifiName = '',
      wifiPassword = '',
    } = apartment;

    const instructions = apartment.instructions
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(apartment.instructions)),
        )
      : EditorState.createEmpty();

    const description = apartment.description
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(apartment.description)),
        )
      : EditorState.createEmpty();

    const houseRules = apartment.houseRules
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(apartment.houseRules)),
        )
      : EditorState.createEmpty();

    this.editorsContent = {
      instructions: instructions.getCurrentContent(),
      description: description.getCurrentContent(),
      houseRules: houseRules.getCurrentContent(),
    };

    this.state = {
      name,
      address,
      wifiName,
      wifiPassword,
      instructions,
      description,
      houseRules,
    };
  }

  onEditorContentChange(editorName, editorContent) {
    this.editorsContent[editorName] = editorContent.getCurrentContent();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      ...this.state,
      instructions: JSON.stringify(
        convertToRaw(this.editorsContent.instructions),
      ),
      description: JSON.stringify(
        convertToRaw(this.editorsContent.description),
      ),
      houseRules: JSON.stringify(convertToRaw(this.editorsContent.houseRules)),
    };

    this.props.onSubmit(data);
  }

  render() {
    const {
      name,
      description,
      address,
      wifiName,
      wifiPassword,
      instructions,
      houseRules,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.root}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="address">
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="wifiName">
          Wifi Name:
          <input
            type="text"
            name="wifiName"
            value={wifiName}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="wifiPassword">
          Wifi Password:
          <input
            type="text"
            name="wifiPassword"
            value={wifiPassword}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="instructions">
          Instructions:
          <TextEditor
            name="instructions"
            content={instructions}
            onContentChange={this.onEditorContentChange}
          />
        </label>
        <label htmlFor="description">
          Description:
          <TextEditor
            name="description"
            content={description}
            onContentChange={this.onEditorContentChange}
          />
        </label>
        <label htmlFor="houseRules">
          House Rules:
          <TextEditor
            name="houseRules"
            content={houseRules}
            onContentChange={this.onEditorContentChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default withStyles(s)(PropertyForm);
