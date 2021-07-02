import actions from 'src/modules/layout/layoutActions';
import { getLanguageCode } from 'src/i18n';
import LayoutDarkMode from 'src/modules/layout/layoutDarkMode';

const initialData = {
  menuVisible: false,
  rightSidebarMenuVisible: false,
  language: getLanguageCode(),
  loading: false,
  darkMode: LayoutDarkMode.get(),
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.DARK_MODE_CHANGE) {
    LayoutDarkMode.set(payload);

    return {
      ...state,
      darkMode: payload,
    };
  }

  if (type === actions.MENU_TOGGLE) {
    return {
      ...state,
      menuVisible: !state.menuVisible,
    };
  }

  if (type === actions.MENU_SHOW) {
    return {
      ...state,
      menuVisible: false,
    };
  }

  if (type === actions.MENU_HIDE) {
    return {
      ...state,
      menuVisible: false,
    };
  }

  if (type === actions.RIGHT_SIDEBAR_MENU_TOGGLE) {
    return {
      ...state,
      rightSidebarMenuVisible: !state.rightSidebarMenuVisible,
    };
  }

  if (type === actions.RIGHT_SIDEBAR_MENU_SHOW) {
    return {
      ...state,
      rightSidebarMenuVisible: false,
    };
  }

  if (type === actions.RIGHT_SIDEBAR_MENU_HIDE) {
    return {
      ...state,
      rightSidebarMenuVisible: false,
    };
  }

  return state;
};
