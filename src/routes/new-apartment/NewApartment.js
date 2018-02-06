import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewApartment.css';
import PropertyForm from '../../components/PropertyForm';

class NewApartment extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      saving: false,
    };
  }

  handleSubmit(apartment) {
    const data = apartment;
    data.listed = true;
    this.setState({ saving: true });
    const url = `/api/apartments`;
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .catch(error => error)
      .then(response => {
        this.setState({ saving: false });
        return response;
      });
  }

  render() {
    const { saving } = this.state;
    const notice = saving ? <p>Saving...</p> : null;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          {notice}
          <PropertyForm apartment={{}} onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NewApartment);
