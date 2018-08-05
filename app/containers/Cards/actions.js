/*
 *
 * Cards actions
 *
 */

import { DEFAULT_ACTION, REQUEST_BALANCE } from './constants';

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
