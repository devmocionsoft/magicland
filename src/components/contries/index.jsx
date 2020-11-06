import React from 'react';
import { Layout, Flag, Country, Cost, Type } from './styles';

function Countries({ cost, country, flag, type }) {
  return (
    <Layout>
      <Flag src={flag} />
      <Country>
        {country}
        :
      </Country>
      <Cost>{cost}</Cost>
      <Type>{type}</Type>
    </Layout>
  );
}

export default Countries;
