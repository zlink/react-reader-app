import { SET_FILENAME, MENU_VISIBLE } from './actionTypes';

export function setFileName(playload) {
  return {
    type: SET_FILENAME,
    playload,
  };
}

export function toggleMenuVisible(playload) {
  return {
    type: MENU_VISIBLE,
    playload,
  };
}
