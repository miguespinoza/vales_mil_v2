/**
 *
 * AddCardButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
const RoundedButton = styled.div`
  border-radius: ${props => (props.active ? '10px' : '35px')};
  color: ${props => props.theme.priText};
  background-color: ${props => props.theme.secondary};
  width: ${props => (props.active ? '300px' : '70px')};
  height: ${props => (props.active ? '300px' : '70px')};
  transition: width 0.5s, height 0.5s, border-radius 0.5s;
`;
const AddIcon = styled.span`
  position: relative;
  top: 3px;
  left: 21px;
  font-size: 3em;
`;
const FormLabel = styled.span`
  font-size: 1.5em;
`;

const Input = styled.input`
  background-color: white;
  margin: 10px;
  flex-grow: 1;
  font-size: 1.5em;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const SaveButton = styled.button`
  background-color: white;
  border-style: solid;
  border: 1px #000;
  padding: 5px;
  :hover {
    background-color: #e0e0e0;
  }
`;

// const cardTypes = {
//  comida: {
//    id: 'comida',
//    icon: 'yellow-card',
//    name: 'Comida',
//  },
//  despensa: {
//    id: 'despensa',
//    icon: 'red-card',
//    name: 'Despensa',
//  },
// };

class AddCardButton extends React.PureComponent {
  state = {
    active: false,
    // type: 'comida',
    cardNumber: '',
    password: '',
  };
  toggle = () => {
    if (!this.state.active) {
      this.setState({ active: !this.state.active });
    }
  };
  render() {
    return (
      <RoundedButton active={this.state.active} onClick={this.toggle}>
        <AddIcon onClick={() => this.setState({ active: !this.state.active })}>
          +
        </AddIcon>
        {this.state.active && (
          <FormContainer>
            <FormLabel>Card Name</FormLabel>
            <Input
              id="cardName"
              type="text"
              value={this.state.cardNumber}
              onChange={e => this.setState({ cardNumber: e.target.value })}
              placeholder="Card Number"
            />
            <FormLabel>Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              placeholder="Password"
            />
            <SaveButton>Save</SaveButton>
          </FormContainer>
        )}
      </RoundedButton>
    );
  }
}

// AddCardButton.propTypes = {
//  onClick: PropTypes.func,
// };

export default AddCardButton;
