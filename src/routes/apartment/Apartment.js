import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Apartment.css';

class Apartment extends React.Component {
  static propTypes = {
    apartment: PropTypes.object.isRequired, // eslint-disable-line
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);

    const { name, description, _id } = this.props.apartment;
    this.state = {
      name,
      description,
      id: _id,
    };
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, description, id } = this.state;
    const url = `/api/apartments/${id}`;
    fetch(url, {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify({ name, description, id }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .catch(error => error)
      .then(response => response);
  }

  render() {
    const { name, description } = this.state;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{name}</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.onNameChange}
              />
            </label>
            <label htmlFor="description">
              Name:
              <textarea
                name="name"
                value={description}
                onChange={this.onDescriptionChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Apartment);
