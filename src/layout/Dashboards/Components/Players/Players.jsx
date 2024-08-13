// Certifique-se de que o contexto S2tContext esteja fornecendo os dados corretamente
import React, { useContext } from 'react';
import * as Styled from './Players-Styles';
import { GridPlayers } from '../../../../components/elements/GridPlayers/GridPlayers';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';

export function Players() {
  const s2tContext = useContext(S2tContext);
  const { s2tState } = s2tContext;

  // Verifique se players não está indefinido
  if (!s2tState.users?.players) {
    return <p>Nenhum jogador encontrado.</p>;
  }

  return (
    <Styled.PlayersContainer>
      <GridPlayers title="Jogadores" items={s2tState.users.players} publicview />
    </Styled.PlayersContainer>
  );
}
