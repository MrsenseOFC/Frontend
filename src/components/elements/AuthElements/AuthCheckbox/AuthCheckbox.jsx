import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthCheckbox-Styles';

export function AuthCheckbox({
  id, value, text = '', checked, onChange,
}) {
  return (
    <Styled.AuthCheckboxElement>
      <Styled.AuthCheckboxInput onChange={onChange} type="checkbox" name={id} id={id} value={value} checked={checked} />
      <Styled.AuthCheckboxLabel htmlFor={id}>{text}</Styled.AuthCheckboxLabel>
    </Styled.AuthCheckboxElement>
  );
}

AuthCheckbox.propTypes = {
  id: Prop.string.isRequired,
  value: Prop.string,
  text: Prop.string,
  checked: Prop.bool,
  onChange: Prop.func,
};
