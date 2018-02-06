import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Apartment.css';
import PropertyForm from '../../components/PropertyForm';

class Apartment extends React.Component {
  static propTypes = {
    apartment: PropTypes.object.isRequired, // eslint-disable-line
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    const { _id, name } = this.props.apartment;
    this.state = {
      name,
      id: _id,
    };
  }

  handleSubmit(data) {
    const { id } = this.state;
    const url = `/api/apartments/${id}`;
    fetch(url, {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify({ ...data }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .catch(error => error)
      .then(response => response);
  }

  render() {
    const { apartment } = this.props;
    const { name } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{name}</h1>
          <PropertyForm apartment={apartment} onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Apartment);
