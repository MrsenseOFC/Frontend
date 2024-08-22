// Certifique-se de que o contexto S2tContext esteja fornecendo os dados corretamente
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Players-Styles';
import { GridPlayers } from '../../../../components/elements/GridPlayers/GridPlayers';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';

export function Players() {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState } = s2tContext;

  return (
    <Styled.PlayersContainer>
      <GridPlayers title={t('players')} items={s2tState.users.players} publicview />
    </Styled.PlayersContainer>
  );
}
