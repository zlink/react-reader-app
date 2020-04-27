import { SET_FILENAME, MENU_VISIBLE, SETTING_VISIBLE } from './actionTypes';

export function setFileName(playload) {
  return {
    type: SET_FILENAME,
    playload,
  };
}

export function toggleMenuVisible() {
  return (dispatch, getState) => {
    const {
      Ebook: { menuVisible },
    } = getState();
    dispatch({
      type: MENU_VISIBLE,
      playload: !menuVisible,
    });
  };
}

export function setSettingVisible(playload) {
  return {
    type: SETTING_VISIBLE,
    playload,
  };
}
