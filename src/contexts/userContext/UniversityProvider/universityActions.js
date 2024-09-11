import * as types from './universityTypes';

export const changeProfileInfo = (dispatch, profileInfo) => {
  dispatch({ type: types.change_profile_info, payload: profileInfo });
};

export const addCompetitionHistory = (dispatch, competitionData) => {
  dispatch({ type: types.add_competition_history, payload: competitionData });
};

export const removeCompetitionHistory = (dispatch, competitionData) => {
  dispatch({ type: types.remove_competition_history, payload: competitionData });
};

export const addAwardHistory = (dispatch, awardData) => {
  dispatch({ type: types.add_award_history, payload: awardData });
};

export const removeAwardHistory = (dispatch, awardData) => {
  dispatch({ type: types.remove_award_history, payload: awardData });
};

export const addVideo = (dispatch, videoData) => {
  dispatch({ type: types.add_video, payload: videoData });
};

export const removeVideo = (dispatch, videoData) => {
  dispatch({ type: types.remove_video, payload: videoData });
};
