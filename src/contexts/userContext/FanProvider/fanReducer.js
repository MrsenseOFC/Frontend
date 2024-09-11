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

    case types.add_video: {
      const videoExists = state.profile.videos.some((video) => video.url === action.payload.url);

      if (!videoExists) {
        return {
          ...state,
          profile: {
            ...state.profile,
            videos: [...state.profile.videos, action.payload],
          },
        };
      }

      return state;
    }

    case types.remove_video:
      return {
        ...state,
        profile: {
          ...state.profile,
          videos: state.profile.videos.filter((video) => video.url !== action.payload.url),
        },
      };

    default: {
      return { ...state };
    }
  }
};
