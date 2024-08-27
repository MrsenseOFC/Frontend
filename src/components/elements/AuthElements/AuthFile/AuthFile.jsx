import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthFile-Styles';

export function AuthFile({
  text, id, accept = 'image/*', required = false, onChange,
}) {
  return (
    <Styled.AuthFileContainer htmlFor={id}>
      {text}
      <Styled.AuthFileInput
        type="file"
        onChange={onChange}
        accept={accept}
        id={id}
        name={id}
        required={required}
      />
    </Styled.AuthFileContainer>
  );
}

AuthFile.propTypes = {
  id: Prop.string.isRequired,
  text: Prop.string,
  accept: Prop.string,
  required: Prop.bool,
  onChange: Prop.func,
};
