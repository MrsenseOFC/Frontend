import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Title-Styles';
import { theme } from '../../../styles/theme';

export function Title({
  text = '', color = theme.colors.white, size = theme.sizes.xxlarge, uppercase = false,
}) {
  return (
    <Styled.TitleElement color={color} size={size} uppercase={uppercase ? 'uppercase' : 'none'}>
      {text}
    </Styled.TitleElement>
  );
}

Title.propTypes = {
  text: Prop.string,
  color: Prop.string,
  size: Prop.string,
  uppercase: Prop.bool,
};
