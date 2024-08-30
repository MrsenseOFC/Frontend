import Prop from 'prop-types';
import React from 'react';
import {
  Logout as LogoutIcon,
  Language as LanguageIcon,
  Close as CloseIcon,
  ContentCopy,
} from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import { Share } from '@styled-icons/fluentui-system-filled';
import { Twitter } from '@styled-icons/evaicons-solid';
import { Facebook } from '@styled-icons/boxicons-logos';
import * as Styled from './ShareMenu-Styles';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';
import { Popup } from '../../../elements/Popup/Popup';
import { Text } from '../../../elements/Text/Text';

export function ShareMenu() {
  const { t } = useTranslation();

  const handleFacebookShare = () => {

  };

  const handleXShare = () => {

  };

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;

    // Usando o Clipboard API
    navigator.clipboard.writeText(currentUrl)
      .then(() => {

      })
      .catch((error) => {

      });
  };

  return (
    //  Necessário mudanças e implementações
    <Styled.ShareMenuContainer>
      <Text text={t('share')} uppercase />
      <GridLayout>

        <StyledLink color={theme.colors.white} hovercolor={theme.colors.primary}>
          <Facebook />
          {t('Facebook')}
        </StyledLink>

        <StyledLink color={theme.colors.white} hovercolor={theme.colors.primary}>
          <Twitter />
          {t('X')}
        </StyledLink>

        <StyledLink color={theme.colors.white} hovercolor={theme.colors.primary} onclick={handleCopyUrl}>
          <ContentCopy />
          {t('copy_url')}
        </StyledLink>

      </GridLayout>

    </Styled.ShareMenuContainer>
  );
}

ShareMenu.propTypes = {
};
