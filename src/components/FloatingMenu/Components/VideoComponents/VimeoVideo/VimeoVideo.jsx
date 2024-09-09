import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Close } from '@styled-icons/evaicons-solid';
import { ArrowBack } from '@styled-icons/material-outlined';
import * as Styled from './VimeoVideo-Styles';
import { theme } from '../../../../../styles/theme';
import { AuthForm } from '../../../../elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../../../elements/AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../../../../elements/AuthElements/AuthButton/AuthButton';
import { Subtitle } from '../../../../elements/Subtitle/Subtitle';
import { IconDiv } from '../../../../elements/IconDiv/IconDiv';
import { Row } from '../../../../RowContainer/Row';

export function VimeoVideo({ onCloseClick, onBackClick }) {
  const { t } = useTranslation();

  return (
    <Styled.VimeoVideoContainer>

      <Row>
        <IconDiv hovercolor={theme.colors.secondary} onclick={onBackClick}>
          <ArrowBack />
        </IconDiv>
        <Subtitle text={t('details')} uppercase />
        <IconDiv hovercolor={theme.colors.mediumred} onclick={onCloseClick}>
          <Close />
        </IconDiv>
      </Row>

      <AuthForm>

        <AuthInput title={t('name')} type="text" placeholder={t('video_name')} />
        <AuthInput title={t('url')} type="text" placeholder={t('vimeo_video_url')} />
        <AuthButton name={t('confirm')} value={t('confirm')} />

      </AuthForm>

    </Styled.VimeoVideoContainer>
  );
}

VimeoVideo.propTypes = {
  onCloseClick: Prop.func,
  onBackClick: Prop.func,
};
