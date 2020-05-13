import { createSelector } from 'reselect';

const basket = state => state.basket;

export const selectBasketItems = createSelector(
    basket,
    beers => beers
);

// Obviously this would be price according to UI/UX 😄
export const selectTotalAbv = createSelector(
    basket,
    beers => beers.reduce((acc, current) => acc + parseFloat(current.abv || 0), 0).toFixed(2)
);
