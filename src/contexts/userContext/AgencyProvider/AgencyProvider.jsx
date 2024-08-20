import React, { useReducer } from 'react';
import Prop from 'prop-types';
import { AgencyContext } from './AgencyContext';
import { agencyReducer } from './agencyReducer';
import { agencyData } from './agencyData';

export function AgencyProvider({ children }) {
  const [agencyState, agencyDispatch] = useReducer(agencyReducer, agencyData);

  return (
    <AgencyContext.Provider value={{ agencyState, agencyDispatch }}>
      {children}
    </AgencyContext.Provider>
  );
}

AgencyProvider.propTypes = {
  children: Prop.node.isRequired,
};
