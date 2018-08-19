/*
 *
 * Cards reducer
 *
 */

import { fromJS } from 'immutable';
import { reducer } from 'utils/redux';
import { REQUEST_BALANCE_SUCCESS, REGISTER_CARD } from './constants';

export const initialState = fromJS({});

const cardsReducer = reducer(
  {
    [REGISTER_CARD]: (state, action) =>
      state.add(action.card.id, fromJS(action.card)),
    [REQUEST_BALANCE_SUCCESS]: (state, action) =>
      state.update(action.card.id, card => card.set('balance', action.balance)),
  },
  initialState,
);

export default cardsReducer;
