import Prop from 'prop-types';
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import { useTranslation } from 'react-i18next';
import * as Styled from './BannerSlide-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { Text } from '../Text/Text';

export function BannerSlide({
  children, lazy, title = '', slidesperview, backgroundimagesrc, gradientdirection, backgroundfixed, autoplay,
}) {
  const { t } = useTranslation();

  // Verifica se children é um array
  const childArray = Array.isArray(children) ? children : [];

  return (
    <Styled.BannerSlideWrapper
      backgroundimagesrc={backgroundimagesrc}
      gradientdirection={gradientdirection}
      backgroundfixed={backgroundfixed ? 'backgroundfixed' : undefined}
    >
      {title && <Subtitle text={title} uppercase size="25px" />}

      <Styled.BannerSlideContainer>
        <Swiper
          spaceBetween={10}
          grabCursor
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={autoplay ? { delay: 2500, disableOnInteraction: true } : false}
          lazy={lazy ? 'true' : undefined}
          breakpoints={{
            1470: {
              slidesPerView: slidesperview || 3,
            },
            1050: {
              slidesPerView: slidesperview || 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {childArray.map((child, index) => (
            <SwiperSlide key={index} lazy={lazy}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.BannerSlideContainer>
    </Styled.BannerSlideWrapper>
  );
}
