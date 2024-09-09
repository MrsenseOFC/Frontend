import Prop, { bool } from 'prop-types';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import { Close, Fullscreen } from '@styled-icons/material-outlined';
import { Delete } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {
  Youtube as YoutubeIcon,
  Vimeo as VimeoIcon,
} from '@styled-icons/boxicons-logos';
import * as Styled from './OwnerVideoSlide-Styles';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthIconFile } from '../../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../../styles/theme';
import { Popup } from '../../Popup/Popup';
import { Column } from '../../../ColumnContainer/Column';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { useAuth } from '../../../../contexts/AuthContext/AuthContext';
import { FloatingMenu } from '../../../FloatingMenu/FloatingMenu';
import { Text } from '../../Text/Text';
import { Subtitle } from '../../Subtitle/Subtitle';
import { Row } from '../../../RowContainer/Row';
import { StyledLink } from '../../StyledLink/StyledLink';
import { YoutubeVideo } from '../../../FloatingMenu/Components/VideoComponents/YoutubeVideo/YoutubeVideo';
import { HudlVideo } from '../../../FloatingMenu/Components/VideoComponents/HudlVideo/HudlVideo';
import { VimeoVideo } from '../../../FloatingMenu/Components/VideoComponents/VimeoVideo/VimeoVideo';
import { UploadOptions } from '../../../FloatingMenu/Components/VideoComponents/UploadOptions/UploadOptions';

// Galeria de vídeos utilizada quando o usuário acessa o próprio perfil
export function OwnerVideoSlide({
  items, title,
}) {
  const { t } = useTranslation();
  const [fullscreenVideo, setFullscreenVideo] = useState('');
  const [deleteVideo, setDeleteVideo] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const { currentUser } = useAuth();

  const handleFullscreen = (item) => {
    setFullscreenVideo(item.src);
  };

  const handleIsDeleting = (item) => {
    setDeleteVideo(deleteVideo === item.id ? '' : item.id);
  };

  const handleConfirmDelete = (item) => {
    setDeleteVideo('');
  };

  return (
    <Styled.OwnerVideoSlideWrapper>
      <Styled.OwnerVideoSlideElement>
        <Title text={title} uppercase />
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          navigation
          zoom
          lazy="true"
          breakpoints={{
            // Breakpoint for tablet screens
            768: {
              slidesPerView: 2,
            },
            // Breakpoint for mobile screens
            0: {
              slidesPerView: 1,
            },
          }}
        >

          {items && items.map((item) => (
            <SwiperSlide
              key={item.id}
              lazy
            >
              <Styled.MediaWrapper>

                <Styled.TopIconsWrapper>

                  <IconDiv
                    onclick={() => handleIsDeleting(item)}
                    active={deleteVideo === item.id}
                    activecolor={theme.colors.red}
                    hovercolor={theme.colors.lightred}
                  >
                    <Delete />
                  </IconDiv>

                </Styled.TopIconsWrapper>

                <video autoPlay muted>
                  <source src={item.src} type="video/mp4" />
                  <track kind="captions" src="" srcLang="en" />
                </video>

                <Styled.BottomIconsWrapper>

                  <IconDiv
                    active={fullscreenVideo === item.src}
                    onclick={() => handleFullscreen(item)}
                    name={t('fullscreen')}
                  >
                    <Fullscreen />
                  </IconDiv>

                </Styled.BottomIconsWrapper>

                <Column>
                  <Popup
                    isopen={deleteVideo === item.id}
                    title={t('delete_video_question')}
                    firstoption="Sim"
                    secondoption="Não"
                    onfirstclick={() => handleConfirmDelete(item)}
                    onsecondclick={() => handleIsDeleting('')}
                  />
                </Column>

              </Styled.MediaWrapper>

            </SwiperSlide>
          ))}

          <SwiperSlide>
            <div onClick={() => setIsUploading(true)}>
              <AuthIconFile
                id="addVideo"
                accept="video/*"
                hovercolor={theme.colors.secondary}
                name={t('add_video_button')}
              >
                <AddIcon />
              </AuthIconFile>
            </div>
          </SwiperSlide>

        </Swiper>

        {isUploading && (
        <FloatingMenu>
          <UploadOptions onClick={() => setIsUploading(false)} />
        </FloatingMenu>
        )}

      </Styled.OwnerVideoSlideElement>

    </Styled.OwnerVideoSlideWrapper>
  );
}

OwnerVideoSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
