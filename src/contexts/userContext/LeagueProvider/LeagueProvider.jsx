import React, { useReducer } from 'react';
import Prop from 'prop-types';
import { LeagueContext } from './LeagueContext';
import { leagueReducer } from './leagueReducer';
import { leagueData } from './leagueData';

export function LeagueProvider({ children }) {
  const [leagueState, leagueDispatch] = useReducer(leagueReducer, leagueData);

  return (
    <LeagueContext.Provider value={{ leagueState, leagueDispatch }}>
      {children}
    </LeagueContext.Provider>
  );
}

LeagueProvider.propTypes = {
  children: Prop.node.isRequired,
};
