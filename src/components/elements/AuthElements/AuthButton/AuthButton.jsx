import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './AuthButton-Styles';

export function AuthButton({
  name, id, value,
}) {
  const { t } = useTranslation();

  return (
    <Styled.AuthButtonElement
      type="submit"
      data-wait={t('please_wait')}
      name={name}
      id={id}
      value={value}
    />
  );
}

AuthButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
