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
          <h1>Properties</h1>
          {this.props.apartments.map(item => (
            /* eslint no-underscore-dangle: 0 */
            <article key={`${item._id}`} className={s.newsItem}>
              <h1 className={s.newsTitle}>
                <a href={`/apartment/${item._id}/edit`}>{item.name}</a>
              </h1>
              <div className={s.newsDesc}> {item.description}</div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
