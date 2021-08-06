import PermissionChecker from 'src/modules/auth/permissionChecker';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Roles from "../../../security/roles";

function PublicRoute({
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

        if (permissionChecker.isAuthenticated) {

            if(permissionChecker.currentUserRolesIds.includes(Roles.values.petOwner)){
                return <Redirect to="/home" />;
            }
            return <Redirect to="/dashboard" />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default PublicRoute;
