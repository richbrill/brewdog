import { combineReducers } from 'redux';
import beers from './containers/Beers/reducer';
import basket from './containers/Basket/reducer';

export default combineReducers({
  beers,
  basket
});