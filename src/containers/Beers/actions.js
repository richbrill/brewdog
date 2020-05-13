export const loadBeers = (food = 'all') => ({ type: 'LOAD_BEERS', payload: { food } });
export const loadBeersSuccess = (beers, food) => {
    return ({ type: 'LOAD_BEERS_SUCCESS', payload: { beers, food } });
}
export const loadBeersError = error => ({ type: 'LOAD_BEERS_ERROR', payload: { error } });
