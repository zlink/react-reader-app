import { SET_FILENAME, MENU_VISIBLE } from './actionTypes';

export function setFileName(playload) {
  return {
    type: SET_FILENAME,
    playload,
  };
}

export function toggleMenuVisible() {
  return (dispatch, getState) => {
    const {
      Home: { menuVisible },
    } = getState();
    dispatch({
      type: MENU_VISIBLE,
      playload: !menuVisible,
    });
  };
}
