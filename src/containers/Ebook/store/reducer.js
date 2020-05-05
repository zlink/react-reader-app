import { SET_FILENAME, MENU_VISIBLE, SETTING_VISIBLE } from './actionTypes';

const defaultState = {
  menuVisible: true,
  settingVisible: -1, // -1 不显示, 0 字号设置, 1 主题设置, 2 进度条, 3 目录
  fileName: '',
  fontSize: 14,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILENAME:
      return { ...state, fileName: action.playload };
    case MENU_VISIBLE:
      return { ...state, menuVisible: action.playload };
    case SETTING_VISIBLE:
      return { ...state, settingVisible: action.playload };
    default:
      return state;
  }
};

export default reducer;
