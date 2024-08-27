import * as types from './s2tTypes';

export const s2tReducer = (state, action) => {
  switch (action.type) {
    case types.show_data:
      return { ...state };
      // padrão usado: return { ...state, player: [...action.payload] };

    case types.add_proposal:
      return {
        ...state,
        proposals: {
          ...state.proposals,
          male: {
            ...state.proposals.male,
            professional: {
              ...state.proposals.male.professional,
              clubs: [...state.proposals.male.professional.clubs, action.payload],
            },
          },
        },
      };

    case types.edit_proposal:
      const updatedProposals = state.proposals.male.professional.clubs.map((proposal) => (proposal.opportunityId === action.payload.opportunityId ? action.payload : proposal));
      return {
        ...state,
        proposals: {
          ...state.proposals,
          male: {
            ...state.proposals.male,
            professional: {
              ...state.proposals.male.professional,
              clubs: updatedProposals,
            },
          },
        },
      };

    case types.add_event:
      return {
        ...state,
        events: [
          ...state.events, action.payload,
        ],
      };

    case types.report_media:

      // insira a função aqui
      return { ...state };

      // filters
    case types.filter_players:

      // insira a função aqui
      return { ...state };

    case types.search_players:

      // insira a função aqui
      return { ...state };

    case types.search_player_proposals:

      // insira a função aqui
      return { ...state };

    case types.filter_player_proposals:

      // insira a função aqui
      return { ...state };

    case types.filter_events:

      // insira a função aqui
      return { ...state };

    case types.search_events:

      // insira a função aqui
      return { ...state };

    default: {
      return { ...state };
    }
  }
};
