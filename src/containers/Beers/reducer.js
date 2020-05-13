// TODO think of a better shape for this data as it's indirectly tied to 'all', pizza', 'steak' as args from UI components
const initialState = {
    loading: false,
    error: false,
    all: [],
    pizza: [],
    steak: []
}

const beers = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_BEERS':
      return { ...state, loading: true, error: false };
    case 'LOAD_BEERS_SUCCESS':
      const additionalState = { [payload.food]: payload.beers };
      return { ...state, ...additionalState, loading: false };
    case 'LOAD_BEERS_ERROR':
      return { ...state, loading: false, error: true };
    default:
      return state
  }
};

export default beers;