import * as types from './fanTypes';

export const changeProfileInfo = (dispatch, profileInfo) => {
  dispatch({ type: types.change_profile_info, payload: profileInfo });
};
