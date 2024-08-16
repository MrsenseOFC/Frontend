import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './LeagueNav-Styles';

import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';
import { Nav } from '../../../Nav/Nav';

export function LeagueNav() {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Styled.LeagueNav>
        <StyledLink
          active={activeLink === '/league-dashboard' || activeLink === '/league-dashboard/'}
          path=""
          text="Home"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/league-dashboard/profile'}
          path="profile"
          text="Perfil"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/my-squad'}
          path="my-squad"
          text="Meu plantel"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/opportunities'}
          path="opportunities"
          text="Oportunidades"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/my-opportunities'}
          path="my-opportunities"
          text="Minhas oportunidades"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/scouts'}
          path="scouts"
          text="Scouts"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/clubs'}
          path="clubs"
          text="Clubes"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
      </Styled.LeagueNav>

      <Styled.LeagueNav>
        <StyledLink
          active={activeLink === '/league-dashboard/players'}
          path="players"
          text="Jogadores"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/events'}
          path="events"
          text="Eventos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/favorites'}
          path="favorites"
          text="Favoritos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/contacts'}
          path="contacts"
          text="Contatos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/friends'}
          path="friends"
          text="Amigos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/store'}
          path="store"
          text="Loja"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/my-affiliates'}
          path="my-affiliates"
          text="Meus afiliados"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/league-dashboard/s2t+'}
          path="s2t+"
          text="S2T+"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.LeagueNav>
    </>
  );
}

LeagueNav.propTypes = {
};
