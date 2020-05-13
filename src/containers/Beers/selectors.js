import { createSelector } from 'reselect';

const beerState = state => state.beers;

export const selectAllBeers = createSelector(
    beerState,
    beers => beers.all
);

export const selectPizzaBeers = createSelector(
    beerState,
    beers => beers.pizza
);

export const selectSteakBeers = createSelector(
    beerState,
    beers => beers.steak
);

export const selectLoading = createSelector(
    beerState,
    state => state.loading
);

export const selectError = createSelector(
    beerState,
    state => state.error
);
