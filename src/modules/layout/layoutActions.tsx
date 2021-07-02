import { setLanguageCode } from 'src/i18n';

const prefix = 'LAYOUT';

const layoutActions = {
  MENU_TOGGLE: `${prefix}_MENU_TOGGLE`,
  MENU_HIDE: `${prefix}_MENU_HIDE`,
  MENU_SHOW: `${prefix}_MENU_SHOW`,
  RIGHT_SIDEBAR_MENU_TOGGLE: `${prefix}_RIGHT_SIDEBAR_MENU_TOGGLE`,
  RIGHT_SIDEBAR_MENU_HIDE: `${prefix}_RIGHT_SIDEBAR_MENU_HIDE`,
  RIGHT_SIDEBAR_MENU_SHOW: `${prefix}_RIGHT_SIDEBAR_MENU_SHOW`,

  DARK_MODE_CHANGE: `${prefix}_DARK_MODE`,

  doChangeLanguage: (language) => {
    setLanguageCode(language);

    /**
     * I18n is outside Redux store,
     * no we need this hack to load it properly
     */
    window.location.reload();
  },

  doDarkModeChange: (isDarkMode) => {
    return {
      type: layoutActions.DARK_MODE_CHANGE,
      payload: Boolean(isDarkMode),
    };
  },

  doToggleMenu: () => {
    return {
      type: layoutActions.MENU_TOGGLE,
    };
  },

  doShowMenu: () => {
    return {
      type: layoutActions.MENU_SHOW,
    };
  },

  doHideMenu: () => {
    return {
      type: layoutActions.MENU_HIDE,
    };
  },

  doToggleRightSidebarMenu: () => {
    return {
      type: layoutActions.RIGHT_SIDEBAR_MENU_TOGGLE,
    };
  },

  doShowRightSidebarMenu: () => {
    return {
      type: layoutActions.RIGHT_SIDEBAR_MENU_SHOW,
    };
  },

  doHideRightSidebarMenu: () => {
    return {
      type: layoutActions.RIGHT_SIDEBAR_MENU_HIDE,
    };
  },
};

export default layoutActions;
