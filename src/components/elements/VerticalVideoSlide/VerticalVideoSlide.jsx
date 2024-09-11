import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './VerticalVideoSlide-Styles';
import 'swiper/css/bundle';
import { StyledLink } from '../StyledLink/StyledLink';
import { Subtitle } from '../Subtitle/Subtitle';
import { Text } from '../Text/Text';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

export function VerticalVideoSlide({
  items, size = '500px', title, lazy,
}) {
  const { t } = useTranslation();
  return (
    <Styled.VerticalVideoSlideElement size={size}>

      {title && <Subtitle text={title} uppercase as="h4" />}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        direction="vertical"
        mousewheel
        loop
        lazy={lazy ? 'true' : undefined}
        pagination
      >

        {items && items.length > 0 ? (
          <>
            {items.map((item) => (
              <SwiperSlide>
                <ReactPlayer
                  url={item.url}
                  width="100%"
                  height="100%"
                  controls
                  playsinline
                />
              </SwiperSlide>
            ))}
          </>
        )
          : (
            <Text text={t('data_not_found')} />
          )}

      </Swiper>

    </Styled.VerticalVideoSlideElement>
  );
}

VerticalVideoSlide.propTypes = {
  size: Prop.string,
  title: Prop.string,
  type: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
};
