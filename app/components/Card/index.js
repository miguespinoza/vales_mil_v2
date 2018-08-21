/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BalanceChart from 'components/BalanceChart';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import creditCard from './credit-card-gold.svg';

const Base = styled.div`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.priText};
  margin: 20px;
  max-width: 400px;
  display: grid;
  grid-template-areas: 'head' 'body' 'foot';
  width: 100%;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

const CardHeader = styled.div`
  grid-area: 'head';
  display: grid;
  grid-template-areas: 'image name';
`;

const CardFooter = styled.div`
  grid-area: 'foot';
`;

const CardBody = styled.div`
  grid-area: 'body';
`;

const CardName = styled.span`
  grid-area: 'name';
  align-self: center;
`;

const CardImage = styled.img`
  height: 100px;
  width: 100px;
  grid-area: 'image';
`;

/* eslint-disable react/prefer-stateless-function */
class Card extends React.Component {
  render() {
    return (
      <Base>
        <CardHeader>
          <CardImage src={creditCard} />
          <CardName> {this.props.cardName} </CardName>
        </CardHeader>
        <CardBody>
          <FormattedMessage {...messages.balance} /> {this.props.balance} $
        </CardBody>
        <CardFooter>
          <BalanceChart />
        </CardFooter>
      </Base>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  balance: PropTypes.number,
};

Card.defaultProps = {
  cardName: 'card name',
  balance: 0,
};

export default Card;
