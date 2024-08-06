import Prop, { bool } from 'prop-types';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import { Fullscreen } from '@styled-icons/material-outlined';
import { Delete } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import * as Styled from './OwnerVideoSlide-Styles';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthIconFile } from '../../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../../styles/theme';
import { Popup } from '../../Popup/Popup';
import { Column } from '../../../ColumnContainer/Column';
import { useAuth } from '../../../../contexts/AuthContext/AuthContext';

// Galeria de vídeos utilizada quando o usuário acessa o próprio perfil
export function OwnerVideoSlide({
  items, title,
}) {
  const [fullscreenVideo, setFullscreenVideo] = useState('');
  const [deleteVideo, setDeleteVideo] = useState('');
  const [newVideo, setNewVideo] = useState('');

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

  const handleAddVideo = async (event) => {
    if (!currentUser) {
      console.error('Usuário não está logado ou não possui um ID válido');
      return;
    }

    const newFile = event.target.files[0];
    console.log(newFile);

    if (newFile) {
      const formData = new FormData();
      formData.append('video_file', newFile);

      try {
        const response = await axios.post(`https://talent2show.onrender.com/api/userVideos/${currentUser.id}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setNewVideo(response.data.video_file);
      } catch (error) {
        console.error('Erro ao enviar o vídeo:', error);
      }
    }
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
                    name="Tela cheia"
                  >
                    <Fullscreen />
                  </IconDiv>

                </Styled.BottomIconsWrapper>

                <Column>
                  <Popup
                    isopen={deleteVideo === item.id}
                    title="Tem certeza que deseja excluir esse vídeo?"
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
            <AuthIconFile
              onChange={handleAddVideo}
              id="addVideo"
              accept="video/*"
              hovercolor={theme.colors.secondary}
              name="Botão para adicionar uma novo foto ou um novo vídeo ao seu perfil"
            >
              <AddIcon />
            </AuthIconFile>
          </SwiperSlide>

        </Swiper>

      </Styled.OwnerVideoSlideElement>

    </Styled.OwnerVideoSlideWrapper>
  );
}

OwnerVideoSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
