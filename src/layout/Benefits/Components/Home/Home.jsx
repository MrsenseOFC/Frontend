import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './Home-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { Slide } from '../../../../components/elements/Slide/Slide';
import { VerticalMiniSlide } from '../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { ListContainer, ListItem, ListWrapper } from '../../../../components/elements/List/List-Styles';
import { s2tData } from '../../../../contexts/s2tContext/s2tData';
import { Banner } from '../../../../components/elements/Banner/Banner';

export function Home() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <Styled.HomeContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text="Boas-vindas aos benefícios da T2S!" uppercase />

        <Text text="Descubra as vantagens exclusivas que a T2S tem reservadas especialmente para você. Nossa missão é tornar sua experiência conosco ainda mais gratificante e recompensadora." />
        <Text text="Aqui estão alguns dos benefícios incríveis que você pode aproveitar como parte da comunidade T2S:" />

      </Banner>

      <Slide items={s2tData.photos.benefits} title="Benefícios T2S" />

      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" gradientdirection="to top">
        <VerticalMiniSlide title="Eventos" type="events" items={s2tData.events} />

        <VerticalSoloSlide title="Social" size="400px" items={s2tData.news} />

        <VerticalMiniSlide title="Notícias" type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.HomeContainer>
  );
}

Home.propTypes = {
};
