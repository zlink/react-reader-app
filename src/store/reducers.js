import * as Types from './types';
export const counter = (state = 0, action) => {
  switch (action.type) {
    case Types.INCREMENT:
      return state + 1;
      break;

    default:
      return state;
      break;
  }
};
