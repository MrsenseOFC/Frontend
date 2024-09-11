import Prop from 'prop-types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Close } from '@styled-icons/evaicons-solid';
import * as Styled from './UploadOptions-Styles';
import { theme } from '../../../../../styles/theme';
import { AuthForm } from '../../../../elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../../../elements/AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../../../../elements/AuthElements/AuthButton/AuthButton';
import { Subtitle } from '../../../../elements/Subtitle/Subtitle';
import { IconDiv } from '../../../../elements/IconDiv/IconDiv';
import { Row } from '../../../../RowContainer/Row';
import { GridLayout } from '../../../../GridLayout/GridLayout';
import { StyledLink } from '../../../../elements/StyledLink/StyledLink';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import { VimeoVideo } from '../VimeoVideo/VimeoVideo';
import { HudlVideo } from '../HudlVideo/HudlVideo';
import { T2sVideo } from '../T2sVideo/T2sVideo';

export function UploadOptions({ onClick, profileType }) {
  const { t } = useTranslation();
  const [uploadType, setUploadType] = useState();

  const handleUploadOption = (e, type) => {
    // e.stopPropagation();
    // e.preventDefault();
    setUploadType(type);
  };

  const handleCancelUpload = (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    setUploadType('');
  };

  return (
    <Styled.UploadOptionsContainer>

      {!uploadType && (
      <>
        <Row>
          <Subtitle text={t('upload_method')} uppercase />

          <IconDiv hovercolor={theme.colors.mediumred} onclick={onClick}>
            <Close />
          </IconDiv>
        </Row>

        <GridLayout>
          <StyledLink hovercolor={theme.colors.mediumred} onclick={(e) => handleUploadOption(e, 'youtube')}>
            <img src="/assets/images/logos/youtube.png" alt="a" />
            {t('youtube')}
          </StyledLink>

          <StyledLink hovercolor={theme.colors.secondary} onclick={(e) => handleUploadOption(e, 'vimeo')}>
            <img src="/assets/images/logos/vimeo.png" alt="a" />
            {t('vimeo')}
          </StyledLink>

          {/* <StyledLink hovercolor={theme.colors.orange} onclick={(e) => handleUploadOption(e, 'hudl')}>
            <img src="/assets/images/logos/hudl.png" alt="a" />
            {t('hudl')}
          </StyledLink> */}

          <StyledLink hovercolor={theme.colors.primary} onclick={(e) => handleUploadOption(e, 't2s')}>
            <img src="/assets/images/logos/t2s.png" alt="a" />
            {t('t2s')}
          </StyledLink>

        </GridLayout>
      </>
      )}

      {uploadType === 'youtube' && <YoutubeVideo profileType={profileType} onCloseClick={onClick} onBackClick={handleCancelUpload} />}
      {uploadType === 'vimeo' && <VimeoVideo profileType={profileType} onCloseClick={onClick} onBackClick={handleCancelUpload} />}
      {uploadType === 'hudl' && <HudlVideo profileType={profileType} onCloseClick={onClick} onBackClick={handleCancelUpload} />}
      {uploadType === 't2s' && <T2sVideo profileType={profileType} onCloseClick={onClick} onBackClick={handleCancelUpload} />}

    </Styled.UploadOptionsContainer>
  );
}

UploadOptions.propTypes = {
  onClick: Prop.func,
  profileType: Prop.string.isRequired,
};
