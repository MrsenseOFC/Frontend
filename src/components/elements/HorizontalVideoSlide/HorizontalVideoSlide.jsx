import Prop, { bool } from 'prop-types';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Fullscreen } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import * as Styled from './HorizontalVideoSlide-Styles';
import { Title } from '../Title/Title';
import { Subtitle } from '../Subtitle/Subtitle';

import { IconDiv } from '../IconDiv/IconDiv';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';
import { RateIcons } from '../RateIcons/RateIcons';
import { ReportModal } from '../ReportModal/ReportModal';
import { ReportIcon } from '../ReportIcon/ReportIcon';
import { Row } from '../../RowContainer/Row';
import { theme } from '../../../styles/theme';

// Galeria de vídeos utilizada quando o usuário acessa o perfil de outro usuário
export function HorizontalVideoSlide({
  items, title,
}) {
  const { t } = useTranslation();
  const [reportingVideo, setReportingVideo] = useState('');

  const handleReporting = (item) => {
    setReportingVideo(reportingVideo ? '' : item.id);
  };

  return (
    <Styled.HorizontalVideoSlideWrapper>
      <Subtitle text={title} uppercase as="h4" />

      <Styled.HorizontalVideoSlideElement>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation
          zoom
          lazy="true"
        >

          {items && items.map((item) => (
            <SwiperSlide key={item.url}>

              <Styled.MediaWrapper>

                <ReactPlayer
                  url={item.url}
                  width="100%"
                  height="100%"
                  controls
                  playsinline
                  // config={{
                  //   youtube: {
                  //     playerVars: {
                  //       showinfo: 0, autoplay: 0, color: 'white', enablejsapi: 1,
                  //     },
                  //   },
                  // }}
                />

                <Row>
                  <Styled.BottomIconsWrapper>

                    <ReportIcon
                      isreporting={reportingVideo === item.id}
                      onclick={() => handleReporting(item)}
                      color={theme.colors.black}
                    />

                    <FavoriteIcon
                      isfavorite={item.isfavorite}
                      id={item.id}
                      color={theme.colors.black}

                    />

                  </Styled.BottomIconsWrapper>

                  <Styled.BottomIconsWrapper>

                    <RateIcons
                      ratevalue={item.rateValue}
                      mediaid={item.id}
                      color={theme.colors.black}
                    />

                  </Styled.BottomIconsWrapper>
                </Row>

              </Styled.MediaWrapper>

            </SwiperSlide>
          ))}

        </Swiper>

      </Styled.HorizontalVideoSlideElement>

      <ReportModal id={reportingVideo} onclick={() => setReportingVideo('')} />

    </Styled.HorizontalVideoSlideWrapper>
  );
}

HorizontalVideoSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
