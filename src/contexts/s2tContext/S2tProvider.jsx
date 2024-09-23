import React, { useReducer } from 'react';
import PropTypes from 'prop-types'; // Corrigido para PropTypes
import { S2tContext } from './S2tContext';
import { s2tReducer } from './s2tReducer';
import { s2tData } from './s2tData';

export function S2tProvider({ children }) {
  const [s2tState, s2tDispatch] = useReducer(s2tReducer, s2tData);

  return (
    <S2tContext.Provider value={{ s2tState, s2tDispatch }}>
      {children}
    </S2tContext.Provider>
  );
}

S2tProvider.propTypes = {
  children: PropTypes.node.isRequired, // Corrigido para PropTypes
};
