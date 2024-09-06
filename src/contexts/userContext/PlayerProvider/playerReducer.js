import * as types from './playerTypes';

const initialState = {
  profile: {
    user_id: '', // ID do usuário associado ao perfil
    best_leg: '', // Perna dominante
    competitive_level: '', // Nível competitivo
    age_category: '', // Categoria de idade
    birth_date: '', // Data de nascimento
    age: 0, // Idade calculada
    birth_city: '', // Cidade de nascimento
    weight: '', // Peso
    height: '', // Altura
    primary_nationality: '', // Nacionalidade primária
    secondary_nationality: '', // Nacionalidade secundária
    passports: '', // Passaportes (se houver)
    payment: '', // Salário
    transfer_value: '', // Valor de transferência
    main_position: '', // Posição principal
    secondary_position: '', // Posição secundária
    tertiary_position: '', // Posição terciária
    league: '', // Liga em que atua
    has_manager: false, // Se tem empresário
    toefl: '', // Nota TOEFL (se aplicável)
    act: '', // Nota ACT (se aplicável)
    sat: '', // Nota SAT (se aplicável)
    graduation_date: '', // Data de formatura
    grade_point_average: '', // Média de notas (GPA)
    clubs: [], // Histórico de clubes
    awards: [], // Histórico de prêmios
    studies: [], // Histórico acadêmico
    banner: {
      profileImageSrc: '', // URL da imagem de perfil
    },
  },
};

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
      return state;
  }
};
