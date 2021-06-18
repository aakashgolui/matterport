import React from 'react';
import Route from './route';
import { allRoutes } from './routes';

import { Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      {allRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
          isPrivate={route.isPrivate}
          hasLoginRegister={route.hasLoginRegister}
        />
      ))}
    </Switch>
  );
}