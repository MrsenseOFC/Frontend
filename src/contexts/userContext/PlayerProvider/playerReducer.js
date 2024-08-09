import * as types from './playerTypes';

export const playerReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PLAYER_DATA':
      return {
        ...state,
        ...action.payload,
      };

    case 'UPDATE_PROFILE_PICTURE':
      return {
        ...state,
        profile: {
          ...state.profile,
          banner: {
            ...state.profile.banner,
            profileImageSrc: action.payload,
          },
        },
      };

    case types.change_profile_info:

      return {
        ...state,
        profile: {
          ...state.profile, info: action.payload,
        },

      };

    case types.add_club_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          clubs: [...state.profile.clubs, action.payload],
        },
      };

    case types.remove_club_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          clubs: state.profile.clubs.filter((club) => club.id !== action.payload.id),
        },
      };

    case types.add_academic_history:

      return {
        ...state,
        profile: {
          ...state.profile,
          studies: [...state.profile.studies, action.payload],
        },
      };

    case types.remove_academic_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          studies: state.profile.studies.filter((studie) => studie.id !== action.payload.id),
        },
      };

    case types.add_award_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          awards: [...state.profile.awards, action.payload],
        },
      };

    case types.remove_award_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          awards: state.profile.awards.filter((award) => award.id !== action.payload.id),
        },
      };

    default:
      return state;
  }
};
