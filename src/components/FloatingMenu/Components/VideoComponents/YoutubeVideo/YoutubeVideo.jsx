import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Close } from '@styled-icons/evaicons-solid';
import { ArrowBack } from '@styled-icons/material-outlined';
import * as Styled from './YoutubeVideo-Styles';
import { theme } from '../../../../../styles/theme';
import { AuthForm } from '../../../../elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../../../elements/AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../../../../elements/AuthElements/AuthButton/AuthButton';
import { Subtitle } from '../../../../elements/Subtitle/Subtitle';
import { IconDiv } from '../../../../elements/IconDiv/IconDiv';
import { Row } from '../../../../RowContainer/Row';

export function YoutubeVideo({ onCloseClick, onBackClick }) {
  const { t } = useTranslation();

  return (
    <Styled.YoutubeVideoContainer>

      <Row>
        <IconDiv hovercolor={theme.colors.mediumred} onclick={onBackClick}>
          <ArrowBack />
        </IconDiv>
        <Subtitle text={t('details')} uppercase />
        <IconDiv hovercolor={theme.colors.mediumred} onclick={onCloseClick}>
          <Close />
        </IconDiv>
      </Row>

      <AuthForm>

        <AuthInput title={t('name')} type="text" placeholder={t('video_name')} />
        <AuthInput title={t('url')} type="text" placeholder={t('youtube_video_url')} />
        <AuthButton
          name={t('confirm')}
          value={t('confirm')}
          bgcolor={theme.colors.red}
          bghover={theme.colors.mediumred}
        />

      </AuthForm>

    </Styled.YoutubeVideoContainer>
  );
}

YoutubeVideo.propTypes = {
  onCloseClick: Prop.func,
  onBackClick: Prop.func,
};
