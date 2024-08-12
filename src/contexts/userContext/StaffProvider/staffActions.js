import * as types from './staffTypes';

export const changeProfilePicture = (dispatch, profilePicture) => {
  dispatch({ type: types.change_profile_picture, payload: [profilePicture] });
};

export const changeProfileInfo = (dispatch, profileInfo) => {
  dispatch({ type: types.change_profile_info, payload: profileInfo });
};

export const addClubHistory = (dispatch, clubData) => {
  dispatch({ type: types.add_club_history, payload: clubData });
};

export const removeClubHistory = (dispatch, clubData) => {
  dispatch({ type: types.remove_club_history, payload: clubData });
};

export const addAcademicHistory = (dispatch, academicData) => {
  dispatch({ type: types.add_academic_history, payload: academicData });
};

export const removeAcademicHistory = (dispatch, academicData) => {
  dispatch({ type: types.remove_academic_history, payload: academicData });
};

export const addAwardHistory = (dispatch, awardData) => {
  dispatch({ type: types.add_award_history, payload: awardData });
};

export const removeAwardHistory = (dispatch, awardData) => {
  dispatch({ type: types.remove_award_history, payload: awardData });
};
