import { call, put, takeEvery } from 'redux-saga/effects';
import { loadBeersSuccess, loadBeersError } from './actions';

// TODO: add error handling for failed reponses
const request = (url, options) => 
  fetch(url, options)
    .then((response) => response.json());

function* fetchBeers({ payload }) {
  try {
    const beers = yield call(request, `https://api.punkapi.com/v2/beers?food=${payload.food}`);
    yield put(loadBeersSuccess(beers, payload.food));
  } catch (e) {
    yield put(loadBeersError(e));
  }
}

function* beersSaga() {
  yield takeEvery('LOAD_BEERS', fetchBeers);
}

export default beersSaga;
