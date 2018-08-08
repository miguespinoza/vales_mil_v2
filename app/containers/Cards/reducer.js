/*
 *
 * Cards reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, REQUEST_BALANCE, REQUEST_BALANCE_ERROR, REQUEST_BALANCE_SUCCESS, REGISTER_CARD } from './constants';

export const initialState = fromJS({});

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REGISTER_CARD:
      const card = action.card;
      return state.add(card.id,fromJS(card));
    case REQUEST_BALANCE_SUCCESS:
      const {card, balance} = action;
      return state.update(card.id, card => card.set('balance',balance));
    default:
      return state;
  }
}

export default cardsReducer;
