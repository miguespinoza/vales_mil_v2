import { takeEvery, call, put, select } from 'redux-saga/effects';
import { REQUEST_BALANCE, REGISTER_CARD } from './constants';
import CardService from 'services/CardService';
import { makeSelectCard } from './selectors';
import { balanceLoaded, requestBalanceError, registerCard } from './actions';

export function* getBalance(action) {
  const cardId = action.cardId;
  const card = yield select(makeSelectCard, cardId);
  try {
    const balance = yield CardService.getBalance(...card);
    yield put(balanceLoaded(card, balance));
  } catch(e) {
    yield put(requestBalanceError(e));
  }
}

export function* registerCard(action) {
  const {card} = action;
  yield put(registerCard(card));

}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(REQUEST_BALANCE, getBalance);
  yield takeEvery(REGISTER_CARD, registerCard);
}
