/**
 *
 * Cards
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import Card from 'components/Card';
import AddCardButton from 'components/AddCardButton';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCards from './selectors';
import reducer from './reducer';
import saga from './saga';

const CardsContainers = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const AddContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
`;

/* eslint-disable react/prefer-stateless-function */
export class Cards extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CardsContainers>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainers>
        <AddContainer>
          <AddCardButton />
        </AddContainer>
      </React.Fragment>
    );
  }
}

Cards.propTypes = {};

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
