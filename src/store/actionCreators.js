import { SET_FILENAME, MENU_VISIBLE } from './types';

export const setFileName = (playload) => {
  return {
    type: SET_FILENAME,
    playload,
  };
};

export const toggleMenuVisible = (playload) => {
  return {
    type: MENU_VISIBLE,
    playload,
  };
};
