import PermissionChecker from 'src/modules/auth/permissionChecker';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function EmptyPermissionsRoute({
  component: Component,
  currentTenant,
  currentUser,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          currentTenant,
          currentUser,
        );

        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: '/beta',
              }}
            />
          );
        }

        if (!permissionChecker.isEmptyPermissions) {
          return <Redirect to="/beta" />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default EmptyPermissionsRoute;
