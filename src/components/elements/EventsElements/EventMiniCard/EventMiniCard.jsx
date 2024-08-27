import Prop from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './EventMiniCard-Styles';
import { Subtitle } from '../../Subtitle/Subtitle';
import { Text } from '../../Text/Text';
import { StyledLink } from '../../StyledLink/StyledLink';

export function EventMiniCard({
  item,
}) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCardClick = (selectedEvent) => {
    // Player é substituido pelo dashboard do usuário dinamicamente
    navigate('/player-dashboard/events', { state: { selectedEvent } });
  };

  return (
    <Styled.EventMiniCardContainer onClick={() => handleCardClick(item)}>
      <StyledLink path={item.path || ''}>

        {item.startHour && <Subtitle text={item.startHour} as="h4" />}

        <Styled.Line />

        <Styled.EventInfo>
          {item.title && <Subtitle text={item.title} as="h5" />}
          {item.subtitle && <Text text={item.subtitle} />}
        </Styled.EventInfo>
      </StyledLink>

    </Styled.EventMiniCardContainer>
  );
}

EventMiniCard.propTypes = {
  item: Prop.object,
};
