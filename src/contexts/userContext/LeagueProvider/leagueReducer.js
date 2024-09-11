import * as types from './leagueTypes';

export const leagueReducer = (state, action) => {
  switch (action.type) {
    case types.reveal_player: {
      return { ...state, player: [...action.payload] };
    }

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
