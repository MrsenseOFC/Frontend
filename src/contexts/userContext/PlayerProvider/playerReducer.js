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
    default:
      return state;
  }
};
