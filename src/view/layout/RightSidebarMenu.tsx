import {faPaw, faTimes, faTrash} from '@fortawesome/free-solid-svg-icons';
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
import {Menu} from "@headlessui/react";

function RightSidebarMenu(props) {
  const dispatch = useDispatch();

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

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  return (
    <div
      className={`${
        rightSidebarMenuVisible ? 'flex flex-col w-full' : 'hidden'
      } sm:w-64 md:w-64 transition-opacity duration-200 rounded-full lg:w-64 flex-shrink-0 min-h-screen px-4 py-4 border-0 sm:border-r md:border-r lg:border-r bg-white dark:border-gray-600`}
    >
      <div className="w-full flex justify-between sm:justify-center md:justify-center lg:justify-center items-center">

        <div className="cursor-pointer block sm:hidden md:hidden lg:hidden text-gray-400 hover:text-gray-200 text-lg mr-2">
          <FontAwesomeIcon
              onClick={doToggleRightSidebarMenuIfSmall}
              icon={faTimes}
          />
        </div>
      </div>

      <div className="justify-between flex-1 mt-6">

        <h2 className="text-xl font-medium text-gray-600 dark:text-light">Reservas</h2>

        <div className="w-full rounded-b mt-4">
          <div className="shadow-xl">
            <div
                className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
              <div className="p-2 w-12"><img
                  src="/icons/beauty-saloon.png"
                  alt="beauty-saloon-category"/></div>
              <div className="flex-auto text-sm w-32">
                <div className="font-bold">Peluquería</div>
                <div className="truncate">Corte de Pelo</div>
                <div className="text-gray-400">Qt: 1</div>
              </div>
              <div className="flex flex-col w-18 font-medium items-end">
                <div
                    className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                  <button>
                    <FontAwesomeIcon
                      className="ml-1 mr-2"
                      size="sm"
                      icon={faTrash}
                  />
                  </button>
                </div>
                $150.00
              </div>
            </div>

          </div>
          <div className="p-4 justify-center">
            <button className="text-gray-900 px-3 py-2 bg-green-400 hover:bg-green-600 rounded border border-green-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer">Checkout $150.00</button>
          </div>
        </div>

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-normal text-gray-600 dark:text-light">My Pets</h2>
            <Link to="/pet/new" className="text-blue-500 hover:underline">Add</Link>
          </div>
          <a href="#" className="flex items-start space-x-2 group mx-4 mt-4">
            <img
                className="flex-shrink-0 object-cover w-20 h-20 rounded-full"
                src="/images/petsImageTwo.jpeg"
                alt="Snoopy"
            />
            <div className="overflow-hidden">
              <h4
                  className="font-semibold text-gray-400 transition-colors dark:text-primary-dark group-hover:text-gray-900 dark:group-hover:text-primary-lighter"
              >
                Snoopy
              </h4>
              <p className="text-sm text-gray-400 truncate">
                Raza
              </p>
            </div>
          </a>
        </div>

    </div>
  );
}

export default RightSidebarMenu;
