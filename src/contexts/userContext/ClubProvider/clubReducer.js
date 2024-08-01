export const clubReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CLUB_PROFILE':
      return {
        ...state,
        profile: action.payload.profile,
        benefits: action.payload.benefits,
      };
    default:
      return state;
  }
};
