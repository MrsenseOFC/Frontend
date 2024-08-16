import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './Studies-Styles';
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

export function Studies() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <Styled.StudiesContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text="Boas vindas à Área de Estudos da T2S!" uppercase />

        <Text text="Aqui, você encontrará informações essenciais para aprimorar seus conhecimentos e expandir seu aprendizado." />
        <Text text="A Área de Estudos da T2S possui uma lista de sites dedicados, onde você encontrará recursos valiosos para aproveitar ao máximo sua jornada acadêmica." />
        <Text text="Para acessar:" />

        <ListWrapper>
          <ListContainer>
            <ListItem>
              Clique em qualquer um dos tipos de estudos abaixo;
            </ListItem>

            <ListItem>
              Você será direcionado automaticamente para o site responsável
            </ListItem>

            <ListItem>
              Comece a aprimorar os seus conhecimentos!
            </ListItem>
          </ListContainer>
        </ListWrapper>
      </Banner>

      <BannerSlide autoplay slidesperview={3}>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

      </BannerSlide>

      <Slide items={s2tData.photos.benefits} title="Outros benefícios T2S" />

      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" gradientdirection="to top">
        <VerticalMiniSlide title="Eventos" type="events" items={s2tData.events} />

        <VerticalSoloSlide title="Social" size="400px" items={s2tData.news} />

        <VerticalMiniSlide title="Notícias" type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.StudiesContainer>
  );
}

Studies.propTypes = {
};
