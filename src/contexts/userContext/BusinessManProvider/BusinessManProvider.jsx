import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BusinessManContext } from './BusinessManContext';
import { businessManReducer } from './businessManReducer';
import { businessManData } from './businessManData';

export function BusinessManProvider({ children }) {
  const [businessManState, businessManDispatch] = useReducer(businessManReducer, businessManData);

  useEffect(() => {
    const fetchBusinessManData = async () => {
      try {
        const response = await axios.get('https://talent2show.onrender.com/api/businessManProfiles/1');

        // Verifique se a resposta é válida e contém dados
        if (response.data && response.data.id) {
          businessManDispatch({ type: 'LOAD_BUSINESS_MAN_DATA', payload: response.data });
        } else {
          console.warn('Resposta da API não contém dados válidos');
        }
      } catch (error) {
        console.error('Erro ao carregar dados do jogador:', error);
        businessManDispatch({ type: 'LOAD_BUSINESS_MAN_DATA_ERROR', payload: error.message });
      }
    };

    fetchBusinessManData();
  }, []);

  return (
    <BusinessManContext.Provider value={{ businessManState, businessManDispatch }}>
      {children}
    </BusinessManContext.Provider>
  );
}

BusinessManProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
