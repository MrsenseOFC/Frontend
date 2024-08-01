import Prop from 'prop-types';
import React from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './AuthInfo-Styles';
import { IconDiv } from '../../IconDiv/IconDiv';
import { theme } from '../../../../styles/theme';

export function AuthInfo({ text, onclick }) {
  return (
    <Styled.AuthInfoContainer>
      <Styled.AuthInfoText>{text}</Styled.AuthInfoText>
      <IconDiv hovercolor={theme.colors.mediumred} onclick={onclick}>
        <CloseIcon />
      </IconDiv>
    </Styled.AuthInfoContainer>
  );
}

AuthInfo.propTypes = {
  text: Prop.string.isRequired,
  onclick: Prop.func,
};
