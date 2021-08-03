import { createSelector } from 'reselect';
import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from "../auth/permissionChecker";
import Permissions from 'src/security/permissions';

const selectPermissionToRead = createSelector(
    [
        authSelectors.selectCurrentTenant,
        authSelectors.selectCurrentUser,
    ],
    (currentTenant, currentUser) =>
        new PermissionChecker(currentTenant, currentUser).match(
            Permissions.values.dashboardGraphRead,
    ),
);

const dashboardSelectors = {
    selectPermissionToRead
};

export default dashboardSelectors;