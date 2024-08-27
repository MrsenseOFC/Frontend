import Prop from 'prop-types';
import React from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useTranslation } from 'react-i18next';
import * as Styled from './AuthInfo-Styles';
import { IconDiv } from '../../IconDiv/IconDiv';
import { theme } from '../../../../styles/theme';

export function AuthInfo({ text, name, onclick }) {
  const { t } = useTranslation();

  return (
    <Styled.AuthInfoContainer>
      <Styled.AuthInfoText>{text}</Styled.AuthInfoText>
      <IconDiv hovercolor={theme.colors.mediumred} onclick={onclick} name={t('remove')}>
        <CloseIcon />
      </IconDiv>
    </Styled.AuthInfoContainer>
  );
}

AuthInfo.propTypes = {
  text: Prop.string.isRequired,
  onclick: Prop.func,
};
