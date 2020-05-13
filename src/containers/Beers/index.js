import React, { Fragment, useState } from 'react';
import BeerItem from './../../components/BeerItem';
import './styles.css';
import { orderBy } from 'lodash';

export default ({ beers, onSubmit }) => {
  const [ sort, setSort ] = useState({
    by: 'abv',
    direction: 'asc' 
  });

  // TODO memoize in a reselect selector
  const sortedBeers = orderBy(beers, sort.by, sort.direction);

  return (
    <Fragment>
      <div className="sort-btns">
        <button onClick={() => setSort({ by: 'abv', direction: 'asc' })}>sort abv asc</button>
        <button onClick={() => setSort({ by: 'abv', direction: 'desc' })}>sort abv desc</button>
        <button onClick={() => setSort({ by: 'name', direction: 'asc' })}>sort name asc</button>
        <button onClick={() => setSort({ by: 'name', direction: 'desc' })}>sort name desc</button>
      </div>
      <div className="beers-list">{sortedBeers.map(beer =>
        <BeerItem
          beer={beer}
          key={beer.id}
          onSubmit={onSubmit}
        />)}
      </div>
    </Fragment>
  )
}
