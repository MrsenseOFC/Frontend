import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { StaffContext } from './StaffContext';
import { staffReducer } from './staffReducer';
import { staffData } from './staffData';

export function StaffProvider({ children }) {
  const [staffState, staffDispatch] = useReducer(staffReducer, staffData);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get('https://talent2show.onrender.com/api/staffProfiles/1');

        // Verifique se a resposta é válida e contém dados
        if (response.data && response.data.id) {
          staffDispatch({ type: 'LOAD_STAFF_DATA', payload: response.data });
        } else {
          console.warn('Resposta da API não contém dados válidos');
        }
      } catch (error) {
        console.error('Erro ao carregar dados do jogador:', error);
        staffDispatch({ type: 'LOAD_STAFF_DATA_ERROR', payload: error.message });
      }
    };

    fetchStaffData();
  }, []);

  return (
    <StaffContext.Provider value={{ staffState, staffDispatch }}>
      {children}
    </StaffContext.Provider>
  );
}

StaffProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
