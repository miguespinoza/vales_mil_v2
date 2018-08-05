import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cards state domain
 */

const selectCardsDomain = state => state.get('cards', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Cards
 */

const makeSelectCards = () =>
  createSelector(selectCardsDomain, substate => substate.toJS());

export default makeSelectCards;
export { selectCardsDomain };
