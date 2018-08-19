/**
 *
 * NavBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import wallet from './wallet.svg';

const Topbar = styled.div`
  background-color: ${props => props.theme.primary};
  height: 67px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
`;
const AppName = styled.span`
  margin-left: 15px;
  color: ${props => props.theme.priText};
  font-size: 2em;
`;

/* eslint-disable react/prefer-stateless-function */
class NavBar extends React.PureComponent {
  render() {
    return (
      <Topbar>
        <img
          src={wallet}
          width="50px"
          height="50px"
          alt="icon"
          style={{ margin: '10px' }}
        />
        <AppName> Vales míl </AppName>
      </Topbar>
    );
  }
}

NavBar.propTypes = {};

export default NavBar;
