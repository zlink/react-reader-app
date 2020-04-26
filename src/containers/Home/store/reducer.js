import { SET_FILENAME, MENU_VISIBLE } from './actionTypes';

const defaultState = {
  menuVisible: false,
  fileName: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILENAME:
      return { ...state, fileName: action.playload };
    case MENU_VISIBLE:
      return { ...state, menuVisible: action.playload };
    default:
      return state;
  }
};

export default reducer;
