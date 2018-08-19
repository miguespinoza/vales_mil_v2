import { takeEvery, call, put, select } from 'redux-saga/effects';
import CardService from 'services/CardService';
import { REQUEST_BALANCE, REGISTER_CARD } from './constants';
import { makeSelectCard } from './selectors';
import { balanceLoaded, requestBalanceError, registerCard } from './actions';

export function* getBalance(action) {
  const { cardId } = action;
  const card = yield select(makeSelectCard, cardId);
  try {
    const balance = yield call(CardService.getBalance, ...card);
    yield put(balanceLoaded(card, balance));
  } catch (e) {
    yield put(requestBalanceError(e));
  }
}

export function* registerCardSaga(action) {
  const { card } = action;
  yield put(registerCard(card));
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(REQUEST_BALANCE, getBalance);
  yield takeEvery(REGISTER_CARD, registerCardSaga);
}
