import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Subtitle-Styles';
import { theme } from '../../../styles/theme';

export function Subtitle({
  text = '', color = theme.colors.white, size = theme.sizes.large, uppercase = false, as = 'h2',
}) {
  return (
    <Styled.SubtitleElement as={as} color={color} size={size} uppercase={uppercase ? 'uppercase' : 'none'}>
      {text}
    </Styled.SubtitleElement>
  );
}

Subtitle.propTypes = {
  text: Prop.string,
  color: Prop.string,
  size: Prop.string,
  uppercase: Prop.bool,
  as: Prop.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
};
