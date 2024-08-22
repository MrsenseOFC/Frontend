// import Prop from 'prop-types';
import React, { useContext } from 'react';
import Prop from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as Styled from './MySquad-Styles';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { GridPlayers } from '../../../../components/elements/GridPlayers/GridPlayers';

export function MySquad({ squad }) {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.MySquadContainer>
      <GridPlayers title={t('my_squad')} squad={squad} />
    </Styled.MySquadContainer>
  );
}

MySquad.propTypes = {
  squad: Prop.arrayOf(Prop.object),
};
