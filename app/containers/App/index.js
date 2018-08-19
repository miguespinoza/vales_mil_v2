/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Cards from 'containers/Cards';
import NavBar from 'components/NavBar';

import styled, { ThemeProvider } from 'styled-components';
import lightTheme from './lightTheme';
// import darkTheme from './darkTheme';
const Body = styled.div`
  background-color: ${p => p.theme.bg};
  height: 100vh;
`;
export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Body>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Cards} />
          <Route component={NotFoundPage} />
        </Switch>
      </Body>
    </ThemeProvider>
  );
}
