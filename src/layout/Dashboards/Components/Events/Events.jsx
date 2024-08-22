import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './Events-Styles';
import { Row } from '../../../../components/RowContainer/Row';
import { Title } from '../../../../components/elements/Title/Title';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { GridEvents } from '../../../../components/elements/EventsElements/GridEvents/GridEvents';

export function Events() {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const location = useLocation();
  const selectedEvent = location.state?.selectedEvent || null;

  return (
    <Styled.EventsContainer>
      <Title text={t('events')} uppercase />
      <GridEvents items={s2tState.events || []} selectedevent={selectedEvent} />
    </Styled.EventsContainer>
  );
}
