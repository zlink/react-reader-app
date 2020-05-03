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
      Ebook: { menuVisible, settingVisible },
    } = getState();
    dispatch({
      type: MENU_VISIBLE,
      playload: !menuVisible,
    });
    settingVisible > -1 && dispatch(setSettingVisible(-1));
  };
}

export function setSettingVisible(playload) {
  return {
    type: SETTING_VISIBLE,
    playload,
  };
  // return (dispatch, getState) => {
  //   const {
  //     Ebook: { settingVisible },
  //   } = getState();
  //   dispatch({
  //     type: SETTING_VISIBLE,
  //     playload: settingVisible > -1 ? -1 : playload,
  //   });
  // };
}
