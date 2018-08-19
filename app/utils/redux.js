import _ from 'lodash';

export function reducer(handlers, defaultState) {
  return function realReducer(state = defaultState, action) {
      if (action && action.type && handlers.hasOwnProperty(action.type)) { // eslint-disable-line
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export const action = (type, transform = _.identity) => (...args) => ({
  type,
  payload: transform(...args),
});
