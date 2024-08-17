import Prop, { nominalTypeHack } from 'prop-types';
import React from 'react';

import {
  Home as HomeIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  ViewCarousel as ViewCarouselIcon,
  Send as SendIcon,
  WorkOutline as WorkIcon,
  SportsSoccer as SportsSoccerIcon,
  FavoriteBorder as FavoriteIcon,
  Hail as EventsIcon,
  PlusOne as PlusIcon,
  Handshake as HandshakeIcon,
  LocalGroceryStore as StoreIcon,
  SafetyDivider as SquadIcon,
  Close as CloseIcon,
  PersonSearch as PersonSearchIcon,
} from '@styled-icons/material-outlined';

import { useTranslation } from 'react-i18next';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { theme } from '../../../../styles/theme';

export function PublicMenu({ type }) {
  const normalizedType = type.toLowerCase();
  const { t } = useTranslation();

  return (
    <GridLayout>

      <StyledLink
        path="profile"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <PersonIcon />
        {t('profile')}
      </StyledLink>

      <StyledLink
        path="squad"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <SquadIcon />
        {t('squad')}

      </StyledLink>

      {type === 'club' && (
        <StyledLink
          path="opportunities"
          color={theme.colors.white}
          hovercolor={theme.colors.primary}
        >
          <ViewCarouselIcon />
          {t('opportunities')}

        </StyledLink>
      )}

      <StyledLink
        path="friends"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <GroupIcon />
        {t('friends')}

      </StyledLink>

      <StyledLink
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <CloseIcon />

        {t('close')}

      </StyledLink>

    </GridLayout>
  );
}

PublicMenu.propTypes = {
  type: Prop.string.isRequired,
};
