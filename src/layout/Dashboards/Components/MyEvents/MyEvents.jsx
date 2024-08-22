import Prop from 'prop-types';
import React from 'react';
import * as Styled from './MyEvents-Styles';
import { GridMyEvents } from '../../../../components/elements/EventsElements/GridMyEvents/GridMyEvents';

export function MyEvents({ events }) {
  return (
    <Styled.MyEventsContainer>
      <GridMyEvents items={events} />
    </Styled.MyEventsContainer>
  );
}

MyEvents.propTypes = {
  events: Prop.arrayOf(Prop.object),
};
