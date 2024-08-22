import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './ClubHome-Styles';
import { VerticalMiniSlide } from '../../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { VerticalSoloSlide } from '../../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { BannerSlide } from '../../../../../components/elements/BannerSlide/BannerSlide';
import { VerticalVideoSlide } from '../../../../../components/elements/VerticalVideoSlide/VerticalVideoSlide';

export function ClubHome() {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.ClubHomeContainer>

      <BannerSlide slidesperview={2} backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">
        <VerticalSoloSlide title={t('social')} size="400px" items={s2tState.news} />
        <VerticalMiniSlide title={t('ranking')} type="referralrank" items={s2tState.rankings.referral} />
      </BannerSlide>

      {/* temporário, requer mudanças nos item passados */}
      <BannerSlide title={t('trending_videos')} slidesperview={2}>

        <VerticalVideoSlide size="300px" items={s2tState.news} title={t('professional')} />
        <VerticalVideoSlide size="300px" items={s2tState.news} title={t('semi_professional')} />
        <VerticalVideoSlide size="300px" items={s2tState.news} title={t('university')} />
        <VerticalVideoSlide size="300px" items={s2tState.news} title={t('amateur')} />
        <VerticalVideoSlide size="300px" items={s2tState.news} title={t('recreational')} />

      </BannerSlide>
      {/* temporário, requer mudanças nos item passados */}

      <BannerSlide slidesperview={2} backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png" gradientdirection="to top">
        <VerticalMiniSlide title={t('events')} type="events" items={s2tState.events} />
        <VerticalMiniSlide title={t('news')} type="news" items={s2tState.news} />
      </BannerSlide>

    </Styled.ClubHomeContainer>
  );
}
