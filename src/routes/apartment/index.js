import React from 'react';
import Layout from '../../components/Layout';
import Apartment from './Apartment';

const title = 'Luxe Property';

async function action(props) {
  const { params, fetch } = props;
  const url = `/api/apartments/${params.id}`;
  const resp = await fetch(url, { method: 'GET' });
  const apartment = await resp.json();
  return {
    chunks: ['apartment'],
    title,
    component: (
      <Layout>
        <Apartment name={apartment.name} />
      </Layout>
    ),
  };
}

export default action;
