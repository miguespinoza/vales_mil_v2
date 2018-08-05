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

const makeSelectCard = cardId =>
  createSelector(selectCardsDomain, substate => substate.get(cardId));

export default makeSelectCards;
export { selectCardsDomain, makeSelectCard };
