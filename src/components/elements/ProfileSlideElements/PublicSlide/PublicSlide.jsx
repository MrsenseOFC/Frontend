import Prop, { bool } from 'prop-types';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Fullscreen } from '@styled-icons/material-outlined';
import * as Styled from './PublicSlide-Styles';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { FavoriteIcon } from '../../FavoriteIcon/FavoriteIcon';
import { RateIcons } from '../../RateIcons/RateIcons';
import { ReportModal } from '../../ReportModal/ReportModal';
import { ImageModal } from '../../ImageModal/ImageModal';
import { ReportIcon } from '../../ReportIcon/ReportIcon';

// Galeria de fotos utilizada quando o usuário acessa o perfil de outra pessoa
export function PublicSlide({
  items, title,
}) {
  const [reportingImage, setReportingImage] = useState('');
  const [fullscreenImage, setFullscreenImage] = useState('');

  const handleFullscreen = (item) => {
    setFullscreenImage(item.src);
  };

  const handleReporting = (item) => {
    setReportingImage(reportingImage ? '' : item.id);
  };

  return (
    <Styled.PublicSlideWrapper>
      <Styled.PublicSlideElement>
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
            <SwiperSlide key={item.id}>

              <Styled.MediaWrapper>

                <Styled.TopIconsWrapper>

                  <ReportIcon
                    isreporting={reportingImage === item.id}
                    onclick={() => handleReporting(item)}
                  />

                  <FavoriteIcon
                    isfavorite={item.isfavorite}
                    id={item.id}
                  />

                </Styled.TopIconsWrapper>

                <div className="swiper-zoom-container">
                  <img src={item.src} alt={item.alt} />
                </div>

                <Styled.BottomIconsWrapper>

                  <RateIcons
                    ratevalue={item.rateValue}
                    mediaid={item.id}
                  />

                  <IconDiv
                    active={fullscreenImage === item.src}
                    name="Tela cheia"
                    onclick={() => handleFullscreen(item)}
                  >
                    <Fullscreen />
                  </IconDiv>

                </Styled.BottomIconsWrapper>

              </Styled.MediaWrapper>

            </SwiperSlide>
          ))}

        </Swiper>

      </Styled.PublicSlideElement>

      <ReportModal id={reportingImage} onclick={() => setReportingImage('')} />

      <ImageModal imagesrc={fullscreenImage} onclick={() => setFullscreenImage('')} />

    </Styled.PublicSlideWrapper>
  );
}

PublicSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
