import Prop, { bool } from 'prop-types';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Fullscreen } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import * as Styled from './PublicVideoSlide-Styles';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { FavoriteIcon } from '../../FavoriteIcon/FavoriteIcon';
import { RateIcons } from '../../RateIcons/RateIcons';
import { ReportModal } from '../../ReportModal/ReportModal';
import { ReportIcon } from '../../ReportIcon/ReportIcon';

// Galeria de vídeos utilizada quando o usuário acessa o perfil de outro usuário
export function PublicVideoSlide({
  items, title,
}) {
  const { t } = useTranslation();
  const [reportingVideo, setReportingVideo] = useState('');
  const [fullscreenVideo, setFullscreenVideo] = useState('');

  const handleFullscreen = (item) => {
    setFullscreenVideo(item.src);
  };

  const handleReporting = (item) => {
    setReportingVideo(reportingVideo ? '' : item.id);
  };

  return (
    <Styled.PublicVideoSlideWrapper>
      <Styled.PublicVideoSlideElement>
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
                    isreporting={reportingVideo === item.id}
                    onclick={() => handleReporting(item)}
                  />

                  <FavoriteIcon
                    isfavorite={item.isfavorite}
                    id={item.id}
                  />

                </Styled.TopIconsWrapper>

                <ReactPlayer
                  url={item.url}
                  width="100%"
                  height="100%"
                  controls
                  playsinline
                />

                <Styled.BottomIconsWrapper>

                  <RateIcons
                    ratevalue={item.rateValue}
                    mediaid={item.id}
                  />

                </Styled.BottomIconsWrapper>

              </Styled.MediaWrapper>

            </SwiperSlide>
          ))}

        </Swiper>

      </Styled.PublicVideoSlideElement>

      <ReportModal id={reportingVideo} onclick={() => setReportingVideo('')} />

    </Styled.PublicVideoSlideWrapper>
  );
}

PublicVideoSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
