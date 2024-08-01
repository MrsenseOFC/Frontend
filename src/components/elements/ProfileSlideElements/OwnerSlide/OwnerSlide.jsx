import Prop, { bool } from 'prop-types';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import { Fullscreen } from '@styled-icons/material-outlined';
import { Delete } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import * as Styled from './OwnerSlide-Styles';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthIconFile } from '../../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../../styles/theme';
import { ImageModal } from '../../ImageModal/ImageModal';
import { Popup } from '../../Popup/Popup';
import { Column } from '../../../ColumnContainer/Column';
import { useAuth } from '../../../../contexts/AuthContext/AuthContext';

export function OwnerSlide({
  items, title,
}) {
  const [fullscreenImage, setFullscreenImage] = useState('');
  const [deleteImage, setDeleteImage] = useState('');
  const [newImage, setNewImage] = useState('');

  const { currentUser } = useAuth();

  const handleFullscreen = (item) => {
    setFullscreenImage(item.src);
  };

  const handleIsDeleting = (item) => {
    setDeleteImage(deleteImage === item.id ? '' : item.id);
  };

  const handleConfirmDelete = (item) => {
    // lógica para excluir imagem
    setDeleteImage('');
  };

  const handleAddImage = async (event) => {
    if (!currentUser) {
      console.error('Usuário não está logado ou não possui um ID válido');
      return;
    }

    const newFile = event.target.files[0];
    if (newFile) {
      const formData = new FormData();
      formData.append('image_file', newFile);

      try {
        const response = await axios.post(`https://talent2show.onrender.com/api/userPhotos/${currentUser.id}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setNewImage(response.data.image_file);
      } catch (error) {
        console.error('Erro ao enviar a imagem:', error);
      }
    }
  };

  return (
    <Styled.OwnerSlideWrapper>
      <Styled.OwnerSlideElement>
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

          {items.length > 0 && items.map((item) => (
            <SwiperSlide
              key={item.id}
              lazy={item.type === 'video'}
            >
              <Styled.MediaWrapper>

                <Styled.TopIconsWrapper>

                  <IconDiv
                    onclick={() => handleIsDeleting(item)}
                    active={deleteImage === item.id}
                    activecolor={theme.colors.red}
                    hovercolor={theme.colors.lightred}
                  >
                    <Delete />
                  </IconDiv>

                </Styled.TopIconsWrapper>

                <div className="swiper-zoom-container">
                  <img src={item.src} alt={item.alt} />
                </div>

                <Styled.BottomIconsWrapper>

                  <IconDiv
                    active={fullscreenImage === item.src}
                    name="Tela cheia"
                    onclick={() => handleFullscreen(item)}
                  >
                    <Fullscreen />
                  </IconDiv>

                </Styled.BottomIconsWrapper>

                <Column>
                  <Popup
                    isopen={deleteImage === item.id}
                    title="Tem certeza que deseja excluir essa imagem?"
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
            <AuthIconFile onChange={handleAddImage} id="addMoreMedia" accept="image/*,video/*" hovercolor={theme.colors.secondary} name="Botão para adicionar uma novo foto ou um novo vídeo ao seu perfil">
              <AddIcon />
            </AuthIconFile>
          </SwiperSlide>

        </Swiper>

      </Styled.OwnerSlideElement>

      <ImageModal imagesrc={fullscreenImage} onclick={() => setFullscreenImage('')} />

    </Styled.OwnerSlideWrapper>
  );
}

OwnerSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
