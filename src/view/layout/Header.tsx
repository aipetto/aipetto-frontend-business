import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import authSelectors from 'src/modules/auth/authSelectors';
import layoutActions from 'src/modules/layout/layoutActions';
import { getHistory } from 'src/modules/store';
import I18nSelect from 'src/view/layout/I18nSelect';
import Avatar from 'src/view/shared/Avatar';
import config from 'src/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPaw,
  faBars,
  faLock,
  faMoon,
  faSignOutAlt,
  faThLarge,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@headlessui/react';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import tenantSelectors from "../../modules/tenant/tenantSelectors";

function Header(props) {
  const dispatch = useDispatch();

  const doToggleMenu = () => {
    dispatch(layoutActions.doToggleMenu());
  };

  const darkMode = useSelector(
    layoutSelectors.selectDarkMode,
  );

  const userText = useSelector(
    authSelectors.selectCurrentUserNameOrEmailPrefix,
  );
  const userAvatar = useSelector(
    authSelectors.selectCurrentUserAvatar,
  );
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );

  const doSignout = () => {
    dispatch(authActions.doSignout());
  };

  const doNavigateToProfile = () => {
    getHistory().push('/profile');
  };

  const doNavigateToPasswordChange = () => {
    getHistory().push('/password-change');
  };

  const doNavigateToTenants = () => {
    getHistory().push('/tenant');
  };

  const hasPermissionToEdit = useSelector(
      tenantSelectors.selectPermissionToEditPassingTheCurrentTenant,
  );

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="w-full flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <button
                className="focus:outline-none text-xl font-bold text-gray-700 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                onClick={doToggleMenu}
              >
                <FontAwesomeIcon icon={faPaw} />
              </button>
            </div>

            <div className="flex w-3/5 items-center mt-0">
              <input type="search" name="" id="" placeholder="Search"
                     className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"/>
              <button className="outline-none focus:outline-none">
                <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>

            <div className="flex items-center mt-0">

              <div className="mr-6 md:block lg:block hidden">
                <I18nSelect />
              </div>

              <Menu>
                <Menu.Button className="flex items-center focus:outline-none">
                  <Avatar
                    size="small"
                    src={userAvatar || undefined}
                    alt="avatar"
                  />

                  <div className="text-left mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 hidden md:block lg:block">
                    {userText}
                    {[
                      'multi',
                      'multi-with-subdomain',
                    ].includes(config.tenantMode) && (
                      <div className="text-xs font-medium">
                        {currentTenant &&
                          currentTenant.name}
                      </div>
                    )}
                  </div>
                </Menu.Button>

                <Menu.Items>
                  <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                    <Menu.Item>
                      <button
                        onClick={doNavigateToProfile}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                        type="button"
                      >
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faUser}
                        />
                        {i18n('auth.profile.title')}
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        onClick={doNavigateToPasswordChange}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                        type="button"
                      >
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faLock}
                        />
                        {i18n('auth.passwordChange.title')}
                      </button>
                    </Menu.Item>
                    {[
                      'multi',
                      'multi-with-subdomain',
                    ].includes(config.tenantMode) && hasPermissionToEdit && (
                      <Menu.Item>
                        <button
                          onClick={doNavigateToTenants}
                          className="w-full text-left block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                          type="button"
                        >
                          <FontAwesomeIcon
                            className="mr-2"
                            icon={faThLarge}
                          />
                          {i18n('auth.tenants')}
                        </button>
                      </Menu.Item>
                    )}
                    {config.apiDocumentationUrl && hasPermissionToEdit && (
                      <Menu.Item>
                        <a
                          href={config.apiDocumentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-left block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                        >
                          <FontAwesomeIcon
                            className="mr-2"
                            icon={faCode}
                          />
                          {i18n('api.menu')}
                        </a>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <button
                        onClick={doSignout}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                        type="button"
                      >
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faSignOutAlt}
                        />
                        {i18n('auth.signout')}
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
