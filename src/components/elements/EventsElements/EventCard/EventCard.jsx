import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './EventCard-Styles';
import { CenterColumn } from '../../../CenterColumn/CenterColumn';
import { InfoInRow } from '../../InfoInRow/InfoInRow';
import { Subtitle } from '../../Subtitle/Subtitle';
import { Text } from '../../Text/Text';

export function EventCard({
  imagesrc, title, subtitle, organizer, startDate, startHour, country, state, platform, onClick,
}) {
  const { t } = useTranslation();

  return (
    <Styled.EventCardElement backgroundimage={imagesrc} onClick={onClick}>

      <Styled.EventInfo>
        <CenterColumn>
          {title && <Subtitle text={title} uppercase />}
          {subtitle && <Text text={subtitle} />}
        </CenterColumn>

        <CenterColumn>
          {organizer && <InfoInRow infotitle={t('organizer')} info={organizer} uppercase />}
          {startDate && <InfoInRow infotitle={t('start_date')} info={startDate} uppercase />}
          {startHour && <InfoInRow infotitle={t('hour')} info={`${startHour}h`} uppercase />}
          {country && <InfoInRow infotitle={t('country')} info={country} uppercase />}
          {state && <InfoInRow infotitle={t('state')} info={state} uppercase />}
          {platform && <InfoInRow infotitle={t('platform')} info={platform} uppercase />}
        </CenterColumn>

      </Styled.EventInfo>

    </Styled.EventCardElement>
  );
}

EventCard.propTypes = {
  imagesrc: Prop.string,
  title: Prop.string,
  subtitle: Prop.string,
  organizer: Prop.string,
  startDate: Prop.string,
  startHour: Prop.string,
  country: Prop.string,
  state: Prop.string,
  onClick: Prop.bool,
};
