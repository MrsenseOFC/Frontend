import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Button-Styles';
import { theme } from '../../../styles/theme';

export function Button({
  onclick, newtab, gradient, active, path, text, size = theme.sizes.small, textcolor = theme.colors.white, texthover = '', bgcolor = theme.colors.black, bghover = '', border = theme.colors.black, borderhover = '',
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onclick) {
      onclick(e);
    }
    if (path && !newtab) {
      navigate(path);
    }
  };

  const ButtonElement = (
    <Styled.ButtonElement
      textcolor={textcolor}
      texthover={texthover}
      bgcolor={bgcolor}
      bghover={bghover}
      border={border}
      size={size}
      borderhover={borderhover}
      onClick={handleClick}
      active={active ? 'active' : undefined}
      gradient={gradient ? 'gradient' : undefined}
    >
      {text}
    </Styled.ButtonElement>
  );

  if (newtab && path) {
    return (
      <a href={path} target="_blank" rel="noopener noreferrer">
        {ButtonElement}
      </a>
    );
  }

  return ButtonElement;
}

Button.propTypes = {
  onclick: PropTypes.func,
  path: PropTypes.string,
  newtab: PropTypes.bool,
  text: PropTypes.string,
  size: PropTypes.string,
  textcolor: PropTypes.string,
  texthover: PropTypes.string,
  bgcolor: PropTypes.string,
  bghover: PropTypes.string,
  border: PropTypes.string,
  borderhover: PropTypes.string,
  active: PropTypes.bool,
  gradient: PropTypes.bool,
};
