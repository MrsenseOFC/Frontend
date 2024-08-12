import * as types from './universityTypes';

export const universityReducer = (state, action) => {
  switch (action.type) {
    case types.change_profile_info:

      return {
        ...state,
        profile: {
          ...state.profile, info: action.payload,
        },

      };

    case types.add_competition_history:

      return {
        ...state,
        profile: {
          ...state.profile,
          competitions: [...state.profile.competitions, action.payload],
        },
      };

    case types.remove_competition_history:
      return {
        ...state,
        profile: {
          ...state.profile,
          competitions: state.profile.competitions.filter((competition) => competition.id !== action.payload.id),
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

    default: {
      return { ...state };
    }
  }
};
