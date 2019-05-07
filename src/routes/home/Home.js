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
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    apartments: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        listed: PropTypes.bool.isRequired,
        description: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <ul>
            <h2>Endpoints:</h2>
            <li>
              <td>
                <h3>Apartments</h3>
                <tr>
                  <span>GET</span>/api/apartments
                </tr>
                <tr>
                  <span>POST</span>/api/apartments
                </tr>
                <tr>
                  <span>GET</span>/api/apartments/:id
                </tr>
                <tr>
                  <span>GET</span>/api/apartments/:id
                </tr>
                <tr>
                  <span>GET</span>/api/apartments/documentation
                </tr>
              </td>
            </li>
            <li>
              <td>
                <h3>Reservations</h3>
                <tr>
                  <span>GET</span>/api/reservations
                </tr>
                <tr>
                  <span>GET</span>/api/reservations/documentation
                </tr>
              </td>
            </li>
            <li>
              <td>
                <h3>Products</h3>
                <tr>
                  <span>GET</span>/api/products
                </tr>
                <tr>
                  <span>GET</span>/api/products/types
                </tr>
                <tr>
                  <span>GET</span>/api/products/apartment/:id
                </tr>
                <tr>
                  <span>GET</span>/api/products/:id/apartment/:apartmentId
                </tr>
                <tr>
                  <span>GET</span>/api/products/documentation
                </tr>
              </td>
            </li>
            <li>
              <td>
                <h3>Cart</h3>
                <tr>
                  <span>POST</span>/api/cart
                </tr>
              </td>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
