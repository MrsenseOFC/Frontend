import * as types from './fanTypes';

export const changeProfileInfo = (dispatch, profileInfo) => {
  dispatch({ type: types.change_profile_info, payload: profileInfo });
};

export const addVideo = (dispatch, videoData) => {
  dispatch({ type: types.add_video, payload: videoData });
};

export const removeVideo = (dispatch, videoData) => {
  dispatch({ type: types.remove_video, payload: videoData });
};
