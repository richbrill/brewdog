import React from 'react';
import BeerItem from './../../components/BeerItem';
import './styles.css';

export default ({ beers, onSubmit }) =>
  <div className="beers-list">{beers.map(beer =>
    <BeerItem
      beer={beer}
      key={beer.id}
      onSubmit={onSubmit}
    />)}
  </div>
