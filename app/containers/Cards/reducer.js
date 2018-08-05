/*
 *
 * Cards reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, REQUEST_BALANCE, REQUEST_BALANCE_ERROR, REQUEST_BALANCE_SUCCESS } from './constants';

export const initialState = fromJS({});

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default cardsReducer;
