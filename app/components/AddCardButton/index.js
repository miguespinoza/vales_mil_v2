/**
 *
 * AddCardButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
const RoundedButton = styled.div`
  border-radius: 35px;
  color: ${props => props.theme.priText};
  background-color: ${props => props.theme.secondary};
  width: 70px;
  height: 70px;
`;
const AddIcon = styled.span`
  position: relative;
  top: 3px;
  left: 21px;
  font-size: 3em;
`;
class AddCardButton extends React.PureComponent {
  render() {
    return (
      <RoundedButton onClick={this.props.onClick}>
        <AddIcon>+</AddIcon>
      </RoundedButton>
    );
  }
}

AddCardButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddCardButton;
