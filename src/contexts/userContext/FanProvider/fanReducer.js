import * as types from './fanTypes';

export const fanReducer = (state, action) => {
  switch (action.type) {
    case types.change_profile_info:

      return {
        ...state,
        profile: {
          ...state.profile, info: action.payload,
        },

      };

    default: {
      return { ...state };
    }
  }
};
