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
import { ThemeProvider } from 'styled-components';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <Switch>
          <Route exact path="/" component={Cards} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}
