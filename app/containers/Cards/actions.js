/*
 *
 * Cards actions
 *
 */

import { DEFAULT_ACTION, REQUEST_BALANCE, REQUEST_BALANCE_ERROR, REQUEST_BALANCE_SUCCESS, REGISTER_CARD } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestBalance() {
  return {
    type: REQUEST_BALANCE,
  };
}

export function requestBalanceError(error) {
  return {
    type: REQUEST_BALANCE_ERROR,
    error,
  };
}

export function balanceLoaded(card, balance) {
  return {
    type: REQUEST_BALANCE_SUCCESS,
    balance,
    card,
  };
}

export function registerCard(card){
  return {
    type: REGISTER_CARD,
    card,
  }
}