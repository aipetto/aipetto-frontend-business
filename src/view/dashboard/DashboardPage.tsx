import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PermissionChecker from 'src/modules/auth/permissionChecker';
import menus from 'src/view/menus';
import {useDispatch, useSelector} from "react-redux";
import {default as authSelectors, default as selectors} from "../../modules/auth/authSelectors";
import layoutSelectors from "../../modules/layout/layoutSelectors";
import layoutActions from "../../modules/layout/layoutActions";

const DashboardPage = (props) => {

  const dispatch = useDispatch();

  const logoUrl = useSelector(selectors.selectLogoUrl);

  const currentTenant = useSelector(
      authSelectors.selectCurrentTenant,
  );
  const currentUser = useSelector(
      authSelectors.selectCurrentUser,
  );
  const menuVisible = useSelector(
      layoutSelectors.selectMenuVisible,
  );

  const doToggleMenuIfSmall = () => {
    if (window.innerWidth < 640) {
      dispatch(layoutActions.doToggleMenu());
    }
  };

  const permissionChecker = new PermissionChecker(
      currentTenant,
      currentUser,
  );

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  const lockedForCurrentPlan = (permission) => {
    return permissionChecker.lockedForCurrentPlan(
        permission,
    );
  };

  return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

              {menus
                  .filter((menu) =>
                      match(menu.permissionRequired),
                  )
                  .map((menu, index) => (
                      <Link className='flex flex-col items-center w-20 h-18 border border-indigo-50 rounded-2xl hover:text-indigo-500 cursor-pointer py-2 bg-white'
                          onClick={doToggleMenuIfSmall}
                          key={menu.path}
                          to={menu.path}
                      >
                        <FontAwesomeIcon
                            className="w-5 h-5"
                            icon={menu.icon}
                        />
                        <span className="text-gray-600 text-sm mt-1">
                    {menu.label}
                  </span>
                      </Link>
                  ))}

              {menus
                  .filter((menu) =>
                      lockedForCurrentPlan(menu.permissionRequired),
                  )
                  .map((menu) => (
                      <div
                          className={`mt-4 opacity-50 flex items-center px-4 py-2 text-gray-600 rounded-md dark:text-gray-400`}
                      >
                        <FontAwesomeIcon
                            className="w-5 h-5"
                            icon={menu.icon}
                        />
                        <span className="mx-4 font-medium truncate">
                    {menu.label}
                  </span>
                      </div>
                  ))}
            </div>
      </>
  );
};

export default DashboardPage;
