import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './VerticalMiniSlide-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { EventMiniCard } from '../EventsElements/EventMiniCard/EventMiniCard';
import { NewsCard } from '../NewsCard/NewsCard';
import { RankCard } from '../RankCard/RankCard';
import { ContactCard } from '../ContactCard/ContactCard';
import { ProposalMiniCard } from '../ProposalMiniCard/ProposalMiniCard';

export function VerticalMiniSlide({ items, title, type }) {
  const normalizedType = type.toLowerCase();
  return (
    <Styled.VerticalMiniSlideWrapper>
      <Subtitle text={title} uppercase as="h3" />

      <Styled.VerticalMiniSlideContainer>

        <Swiper
          spaceBetween={0}
          direction="vertical"
          slidesPerView={type === 'news' ? 2 : 3}
          mousewheel
          loop
          pagination={{ clickable: true }}
          breakpoints={{

            769: {
              slidesPerView: 3,
            },

            481: {
              slidesPerView: 2,
            },

            0: {
              slidesPerView: type === 'news' || type === 'referralrank' ? 1 : 2,
            },
          }}
        >

          {normalizedType === 'events' && (
            <>
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <EventMiniCard
                    item={item}
                  />
                </SwiperSlide>
              ))}
            </>
          )}

          {normalizedType === 'news' && (
          <>
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsCard
                  title={item.title}
                  thumbnail={item.thumbnail}
                  text={item.text}
                  path={item.path}
                />
              </SwiperSlide>
            ))}
          </>
          )}

          {normalizedType === 'referralrank' && (
          <>
            {items.map((item) => (
              <SwiperSlide key={item.position}>
                <RankCard name={item.name} position={item.position} imagesrc={item.imagesrc} />
              </SwiperSlide>
            ))}
          </>
          )}

          {normalizedType === 'proposals' && (
          <>
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <ProposalMiniCard
                  item={item}
                />
              </SwiperSlide>
            ))}
          </>
          )}

          {normalizedType === 'contact' && (
          <>
            <SwiperSlide>
              <ContactCard title="Agente" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" />
            </SwiperSlide>

            <SwiperSlide>
              <ContactCard title="Agente" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" newmessage />
            </SwiperSlide>

            <SwiperSlide>
              <ContactCard title="Agente" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" />
            </SwiperSlide>

            <SwiperSlide>
              <ContactCard title="Agente" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" newmessage />
            </SwiperSlide>

          </>
          )}

        </Swiper>

      </Styled.VerticalMiniSlideContainer>
    </Styled.VerticalMiniSlideWrapper>

  );
}

VerticalMiniSlide.propTypes = {
  title: Prop.string,
  type: Prop.string.isRequired,
  items: Prop.arrayOf(Prop.object).isRequired,
};
