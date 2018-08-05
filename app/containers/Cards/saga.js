import { takeEvery, call, put, select } from 'redux-saga/effects';
import { REQUEST_BALANCE } from './constants';
import CardService from 'services/CardService';
import { makeSelectCard } from './selectors';
import { balanceLoaded, requestBalanceError } from './actions';

export function* getBalance(action) {
  const cardId = action.cardId;
  const card = yield select(makeSelectCard, cardId);
  try {
    const balance = yield CardService.getBalance(...card);
    put(balanceLoaded(card, balance));
  } catch(e) {
    put(requestBalanceError(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(REQUEST_BALANCE, getBalance);
}
