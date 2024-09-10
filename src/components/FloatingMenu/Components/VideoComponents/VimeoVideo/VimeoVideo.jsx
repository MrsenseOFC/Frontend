import Prop from 'prop-types';
import React, { useState } from 'react';
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
import { Text } from '../../../../elements/Text/Text';

export function VimeoVideo({ onCloseClick, onBackClick }) {
  const { t } = useTranslation();
  const [videoUrl, setVideoUrl] = useState();
  const [message, setMessage] = useState();

  const handleVideoUpload = (e) => {
    e.preventDefault();

    if (videoUrl) {
      onCloseClick();
    } else {
      setMessage(t('insert_video_url'));
    }
  };

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

      <AuthForm onSubmit={handleVideoUpload}>

        <AuthInput
          name="vimeoVideoUrl_input"
          id="vimeoVideoUrl_input"
          title={t('url')}
          type="text"
          placeholder={t('vimeo_video_url')}
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        <AuthButton
          name={t('confirm')}
          value={t('confirm')}
          bgcolor={theme.colors.quaternary}
          bghover={theme.colors.secondary}
        />

        {message && <Text text={message} />}

      </AuthForm>

    </Styled.VimeoVideoContainer>
  );
}

VimeoVideo.propTypes = {
  onCloseClick: Prop.func,
  onBackClick: Prop.func,
};
