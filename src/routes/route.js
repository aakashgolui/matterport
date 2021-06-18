import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from '../pages/_layouts/default';
import AuthLayout from '../pages/_layouts/auth';
import { isLoggedIn } from '../utils/auth';
export default function RouteWrapper({
  component: Component,
  isPrivate,
  hasLoginRegister,
  ...rest
}) {
  const signed = isLoggedIn();
  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  }
  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if (!isPrivate && signed) {
    return <Redirect to="/" />;
  }
  const Layout = isPrivate ? AuthLayout : DefaultLayout;
  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return (
    <Route
      {...rest}
      render={(props) => {
        const layoutProps = Object.assign(props, { hasLoginRegister });
        return (
          <Layout {...layoutProps}>
            <Component {...layoutProps} />
          </Layout>
        );
      }}
    />
  );
}

RouteWrapper.propTypes = {
  path: PropTypes.string,
  isPrivate: PropTypes.bool,
  hasLoginRegister: PropTypes.bool,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  hasLoginRegister: false,
};