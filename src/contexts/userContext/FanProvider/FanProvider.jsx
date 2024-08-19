import React, { useReducer } from 'react';
import Prop from 'prop-types';
import { FanContext } from './FanContext';
import { fanReducer } from './fanReducer';
import { fanData } from './fanData';

export function FanProvider({ children }) {
  const [fanState, fanDispatch] = useReducer(fanReducer, fanData);

  return (
    <FanContext.Provider value={{ fanState, fanDispatch }}>
      {children}
    </FanContext.Provider>
  );
}

FanProvider.propTypes = {
  children: Prop.node.isRequired,
};
