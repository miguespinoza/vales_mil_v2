/**
 *
 * Cards
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Card from 'components/Card';
import AddCardButton from 'components/AddCardButton';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCards from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Cards extends React.PureComponent {
  render() {
    return (
      <div>
        <Card />
        <AddCardButton />
      </div>
    );
  }
}

Cards.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cards: makeSelectCards(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cards', reducer });
const withSaga = injectSaga({ key: 'cards', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Cards);
