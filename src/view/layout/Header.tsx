import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {i18n} from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import authSelectors from 'src/modules/auth/authSelectors';
import layoutActions from 'src/modules/layout/layoutActions';
import {getHistory} from 'src/modules/store';
import Avatar from 'src/view/shared/Avatar';
import {Link} from 'react-router-dom';
import config from 'src/config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCode,
  faDoorOpen,
  faLock,
  faPaw,
  faShoppingCart,
  faSignOutAlt,
  faThLarge,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {Menu} from '@headlessui/react';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import tenantSelectors from "../../modules/tenant/tenantSelectors";
import I18nFlags from "./I18nFlags";

function Header(props) {
  const dispatch = useDispatch();

  const doToggleMenu = () => {
    dispatch(layoutActions.doToggleMenu());
  };

  const doToggleRightSidebarMenu = () => {
    dispatch(layoutActions.doToggleRightSidebarMenu());
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
    <header className="bg-green-300 shadow dark:bg-gray-800">
      <div className="px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="w-full flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <button
                className="focus:outline-none text-xl font-bold text-gray-700 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                onClick={doToggleMenu}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            <div className="flex items-center mt-0">

              <Menu>

                { hasPermissionToEdit && (
                      <div>
                        <button
                            className="focus:outline-none focus:text-blue-400 hover:text-blue-400 text-xl font-bold text-gray-700 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                            onClick={doToggleRightSidebarMenu}
                        >
                          <FontAwesomeIcon icon={faPaw} />
                        </button>

                        <Link
                            className="text-gray-900 dark:text-green-400 focus:text-blue-400 hover:text-blue-400"
                            size="lg"
                            to={`/aipetto-store`}
                        >

                          <FontAwesomeIcon
                            className="ml-5 mr-1"
                            size="lg"
                            icon={faShoppingCart}
                        />
                          8500
                        </Link>
                    </div>
                ) }

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

                <div className="mr-6 ml-6 md:block lg:block">
                  <I18nFlags />
                </div>

                <Menu.Button className="flex items-center focus:outline-none mr-6">
                  <Avatar
                      size="5x"
                      className="mr-9"
                      src={userAvatar || undefined}
                      alt="avatar"
                  />
                  <FontAwesomeIcon icon={faDoorOpen} />
                </Menu.Button>

              </Menu>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
