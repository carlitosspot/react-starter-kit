import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Apartment.css';

class Apartment extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.name}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Apartment);
