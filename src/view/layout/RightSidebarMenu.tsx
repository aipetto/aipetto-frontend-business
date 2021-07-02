import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import {
  default as authSelectors,
  default as selectors,
} from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import layoutActions from 'src/modules/layout/layoutActions';
import actions from 'src/modules/layout/layoutActions';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import menus from 'src/view/menus';

function Menu(props) {
  const dispatch = useDispatch();

  const logoUrl = useSelector(selectors.selectLogoUrl);

  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );
  const rightSidebarMenuVisible = useSelector(
    layoutSelectors.selectRightSidebarMenuVisible,
  );

  const doToggleRightSidebarMenuIfSmall = () => {
    if (window.innerWidth < 640) {
      dispatch(layoutActions.doToggleRightSidebarMenu());
    }
  };

  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );

  useLayoutEffect(() => {
    const toggleRightSidebarMenuOnResize = () => {
      window.innerWidth < 640
        ? dispatch(actions.doHideRightSidebarMenu())
        : dispatch(actions.doShowRightSidebarMenu());
    };

    toggleRightSidebarMenuOnResize();

    window.addEventListener('resize', toggleRightSidebarMenuOnResize);

    return () => {
      window.removeEventListener(
        'resize',
        toggleRightSidebarMenuOnResize,
      );
    };
  }, [dispatch]);

  const selectedKeys = () => {
    const url = props.url;

    const match = menus.find((option) => {
      if (option.exact) {
        return url === option.path;
      }

      return (
        url === option.path ||
        url.startsWith(option.path + '/dashboard')
      );
    });

    if (match) {
      return [match.path];
    }

    return [];
  };

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  const lockedForCurrentPlan = (permission) => {
    return permissionChecker.lockedForCurrentPlan(
      permission,
    );
  };

  return (
    <div
      className={`${
        rightSidebarMenuVisible ? 'flex flex-col w-full' : 'hidden'
      } sm:w-64 md:w-64 transition-opacity duration-200 rounded-full lg:w-64 flex-shrink-0 min-h-screen px-4 py-4 border-0 sm:border-r md:border-r lg:border-r bg-white dark:border-gray-600`}
    >
      <div className="w-full flex justify-between sm:justify-center md:justify-center lg:justify-center items-center">
        <Link onClick={doToggleRightSidebarMenuIfSmall} to="/">
          {logoUrl ? (
            <img
              src={logoUrl}
              className="w-72 max-h-14 object-cover"
              alt={i18n('app.title')}
            />
          ) : (
            <div className="text-center text-3xl font-semibold text-black-200 hover:text-gray-400">
              <>{i18n('app.title')}</>
            </div>
          )}
        </Link>
        <div className="cursor-pointer block sm:hidden md:hidden lg:hidden text-gray-400 hover:text-gray-200 text-lg mr-2">
          <FontAwesomeIcon
            onClick={doToggleRightSidebarMenuIfSmall}
            icon={faTimes}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {menus
            .filter((menu) =>
              match(menu.permissionRequired),
            )
            .map((menu, index) => (
              <Link
                className={`${index !== 0 ? 'mt-4' : ''} ${
                  selectedKeys().includes(menu.path)
                    ? 'flex items-center px-4 py-2 rounded-md bg-green-300 text-black'
                    : 'flex items-center px-4 py-2 transition-colors duration-200 transform rounded-md text-gray-400 hover:bg-green-300 hover:text-black'
                }`}
                onClick={doToggleRightSidebarMenuIfSmall}
                key={menu.path}
                to={menu.path}
              >
                <FontAwesomeIcon
                  className="w-5 h-5"
                  icon={menu.icon}
                />
                <span className="mx-4 font-medium truncate">
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
        </nav>
      </div>
    </div>
  );
}

export default Menu;
