import Prop from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import * as Styled from './TextSlide-Styles';
import { Title } from '../Title/Title';
import { ImageText } from '../ImageText/ImageText';
import { Text } from '../Text/Text';

export function TextSlide({ items, title }) {
  const orderedItems = useMemo(() => {
    if (items && items.length > 0) {
      return items.sort((a, b) => b.year - a.year);
    }
    return [];
  }, [items]);

  return (
    <Styled.TextSlideElement>
      <Title text={title} uppercase />
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          type: 'bullets', // Type of pagination (e.g., 'bullets', 'fraction')
          clickable: true, // Enable clickable pagination
        }}
        breakpoints={{

          // Breakpoint for PCs smalls screen
          931: {
            slidesPerView: 3,
          },
          // Breakpoint for tablet screens
          601: {
            slidesPerView: 2,
          },
          // Breakpoint for mobile screens
          0: {
            slidesPerView: 1,
          },
        }}
      >

        {orderedItems ? (
          <>
            {orderedItems.map((item) => (
              <SwiperSlide key={item.id}>
                <ImageText
                  imagesrc={item.image}
                  primarytext={item.name}
                  secondarytext={item.year}
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <Text text="Nenhum dado foi encontrado..." />
        ) }

      </Swiper>
    </Styled.TextSlideElement>
  );
}

TextSlide.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired,
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  title: Prop.string,
};
