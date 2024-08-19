import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close } from '@styled-icons/material-outlined';
import Zoom from 'react-medium-image-zoom';
import * as Styled from './ImageModal-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';
import 'react-medium-image-zoom/dist/styles.css';
import { useTranslation } from 'react-i18next';

export function ImageModal({ onclick, imagesrc }) {
  const { t } = useTranslation();
  return (
    <>
      {imagesrc && (
      <Styled.ModalWrapper>

        <Styled.ImageModalContainer>

          <IconDiv name={t('close_image')} hovercolor={theme.colors.red} onclick={onclick}>
            <Close />
          </IconDiv>

          <Styled.ImageContainer>
            <Zoom>
              <img
                alt=""
                src={imagesrc}
              />
            </Zoom>
          </Styled.ImageContainer>

        </Styled.ImageModalContainer>

      </Styled.ModalWrapper>
      )}
    </>
  );
}

ImageModal.propTypes = {
  imagesrc: Prop.string,
  onclick: Prop.func,
};
