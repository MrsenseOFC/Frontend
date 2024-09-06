import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Text-Styles';
import { theme } from '../../../styles/theme';

export function Text({
  text, uppercase, color = theme.colors.white, size = theme.sizes.medium, children,
}) {
  return (
    <Styled.TextElement uppercase={uppercase ? 'uppercase' : 'none'} color={color} size={size}>
      {text}
      {children}
    </Styled.TextElement>
  );
}

Text.propTypes = {
  children: Prop.node,
  text: Prop.string.isRequired,
  color: Prop.string,
  uppercase: Prop.bool,
  size: Prop.string,
};
