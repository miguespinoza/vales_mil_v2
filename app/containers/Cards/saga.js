import { takeEvery, call, put, select } from 'redux-saga/effects';
import { REQUEST_BALANCE } from './constants';

const fakeAPI =
  'http://private-094e16-valesmil.apiary-mock.com/api/valesmil?code=1EcCTvok6a9XXKd6CjzoV2dziSIJgONKHQo5RTg105hnFPDTVTgT6g==';
const realAPI =
  'https://valesmil2.azurewebsites.net/api/valesmil?code=1EcCTvok6a9XXKd6CjzoV2dziSIJgONKHQo5RTg105hnFPDTVTgT6g==';

export function* getBalance(action) {
  const cardId = action.cardId;
  const url = fakeAPI;
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(REQUEST_BALANCE, getBalance);
}
