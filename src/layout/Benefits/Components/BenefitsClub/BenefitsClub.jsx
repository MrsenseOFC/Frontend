import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './BenefitsClub-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { Slide } from '../../../../components/elements/Slide/Slide';
import { VerticalMiniSlide } from '../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { Button } from '../../../../components/elements/Button/Button';
import { theme } from '../../../../styles/theme';
import { ListContainer, ListItem, ListWrapper } from '../../../../components/elements/List/List-Styles';
import { s2tData } from '../../../../contexts/s2tContext/s2tData';
import { Banner } from '../../../../components/elements/Banner/Banner';

export function BenefitsClub() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  const { t } = useTranslation;

  return (
    <Styled.BenefitsClubContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">
        <Title text={t('welcome_t2s_benefits_club')} uppercase />

        <Text text={t('benefits_club_text_1')} />
        <Text text={t('benefits_club_text_2')} />

        <ListWrapper>
          <ListContainer>
            <ListItem>
              {t('benefits_club_step_1')}
            </ListItem>

            <ListItem>
              {t('benefits_club_step_2')}
            </ListItem>

            <ListItem>
              {t('benefits_club_step_3')}
            </ListItem>

            <ListItem>
              {t('benefits_club_step_4')}
            </ListItem>
          </ListContainer>
        </ListWrapper>
      </Banner>

      {/* <Slide items={s2tState.photos.benefits} title="Benefícios" /> */}

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
        <VerticalMiniSlide title={t('events')} type="events" items={s2tData.events} />

        {/* disparando 2 warning de thid party cookies no console */}
        <VerticalSoloSlide title={t('social')} size="400px" items={s2tData.news} />

        <VerticalMiniSlide title={t('news')} type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.BenefitsClubContainer>
  );
}

BenefitsClub.propTypes = {
};
