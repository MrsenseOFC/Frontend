import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { PlayerContext } from './PlayerContext';
import { playerReducer } from './playerReducer';
import { playerData } from './playerData';

export function PlayerProvider({ children }) {
  const [playerState, playerDispatch] = useReducer(playerReducer, playerData);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get('https://talent2show.onrender.com/api/playerProfiles/1');

        // Verifique se a resposta é válida e contém dados
        if (response.data && response.data.id) {
          playerDispatch({ type: 'LOAD_PLAYER_DATA', payload: response.data });
        } else {
          console.warn('Resposta da API não contém dados válidos');
        }
      } catch (error) {
        console.error('Erro ao carregar dados do jogador:', error);
        playerDispatch({ type: 'LOAD_PLAYER_DATA_ERROR', payload: error.message });
      }
    };

    fetchPlayerData();
  }, []);

  return (
    <PlayerContext.Provider value={{ playerState, playerDispatch }}>
      {children}
    </PlayerContext.Provider>
  );
}

PlayerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
