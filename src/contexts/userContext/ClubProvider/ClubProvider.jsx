import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ClubContext } from './ClubContext';
import { clubReducer } from './clubReducer';

const initialState = {
  profile: {
    banner: {
      backgroundImageSrc: '',
      profileImageSrc: '',
      badge: '',
      name: '',
    },
  },
  benefits: [],
};

export function ClubProvider({ children }) {
  const [clubState, clubDispatch] = useReducer(clubReducer, initialState);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await axios.get('https://talent2show.onrender.com/api/clubProfiles/1');
        if (response.data) {
          console.log('Dados do clube:', response.data);
          clubDispatch({ type: 'SET_CLUB_PROFILE', payload: response.data });
        } else {
          console.error('Dados do clube não encontrados ou inválidos.');
        }
      } catch (error) {
        console.error('Erro ao carregar dados do clube:', error.response ? error.response.data : error.message);
      }
    };

    fetchClubData();
  }, []);

  return (
    <ClubContext.Provider value={{ clubState, clubDispatch }}>
      {children}
    </ClubContext.Provider>
  );
}

ClubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
