import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './AuthRadio-Styles';

export function AuthRadio({
  title, options, groupname, onChange, required, selectedvalue,
}) {
  const { t } = useTranslation();

  const handleClick = (option) => {
    onChange(option.value);
  };

  return (
    <Styled.AuthRadioContainer>
      <Styled.AuthRadioTitle>
        {title}
        {' '}
        (
        {t('required')}
        )
      </Styled.AuthRadioTitle>
      {options.map((option) => (
        <Styled.AuthRadioElement key={option.value}>
          <Styled.AuthRadioInput
            onChange={() => handleClick(option)}
            type="radio"
            name={groupname}
            id={`${groupname}:${option.value}`}
            value={option.value}
            required={required}
            checked={option.value === selectedvalue}
          />
          <Styled.AuthRadioLabel htmlFor={`${groupname}:${option.value}`}>{t(`${option.value}`)}</Styled.AuthRadioLabel>
        </Styled.AuthRadioElement>
      ))}

    </Styled.AuthRadioContainer>
  );
}

AuthRadio.propTypes = {
  options: Prop.arrayOf(
    Prop.shape({
      value: Prop.string.isRequired,
      label: Prop.string.isRequired,
    }),
  ).isRequired,
  title: Prop.string.isRequired,
  groupname: Prop.string.isRequired,
  required: Prop.bool,
  onChange: Prop.func,
};
