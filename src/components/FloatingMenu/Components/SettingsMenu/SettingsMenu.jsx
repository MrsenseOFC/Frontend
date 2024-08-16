import Prop from 'prop-types';
import React from 'react';
import {
  Logout as LogoutIcon,
  Language as LanguageIcon,
  Close as CloseIcon,
} from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as Styled from './SettingsMenu-Styles';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';
import { Popup } from '../../../elements/Popup/Popup';

export function SettingsMenu() {
  const { t } = useTranslation();

  return (
    <Styled.SettingsMenuContainer>
      <GridLayout>

        <StyledLink color={theme.colors.white} hovercolor={theme.colors.primary}>
          <LanguageIcon />
          {t('select_language')}
        </StyledLink>

        <StyledLink path="/logout" color={theme.colors.white} hovercolor={theme.colors.primary}>
          <LogoutIcon />
          {t('logout')}
        </StyledLink>

        <StyledLink color={theme.colors.white} hovercolor={theme.colors.primary}>
          <CloseIcon />
          {t('close')}
        </StyledLink>

      </GridLayout>

    </Styled.SettingsMenuContainer>
  );
}

SettingsMenu.propTypes = {
};
