import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { KeyboardArrowDown as ArrowDownIcon, KeyboardArrowUp as ArrowUpIcon } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as Styled from './AuthDropdown-Styles';

export function AuthDropdown({
  options,
  placeholder,
  title,
  id,
  required = false,
  onDropdownChange,
  selectedvalue = '',
  otheroption = false,
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState(
    options.find((option) => option.value === selectedvalue)?.text || '',
  );

  const other = { value: 'other', text: 'Outro' };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    onDropdownChange(option.value);
    setDropdownText(option.text);
    setIsOpen(false); // Fecha o dropdown após a seleção
  };

  const resetItem = () => {
    onDropdownChange('');
    setDropdownText('');
  };

  return (
    <Styled.AuthDropdownContainer id={id}>
      {title && (
        <Styled.DropdownTitle>
          {title}
          {' '}
          {required && `(${t('required')})`}
        </Styled.DropdownTitle>
      )}

      <Styled.DropdownButton onClick={toggleDropdown} active={isOpen ? 'Active' : undefined}>
        {dropdownText || placeholder || t('select')}
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Styled.DropdownButton>

      {isOpen && (
        <Styled.DropdownContent onClick={toggleDropdown}>
          {placeholder && (
            <Styled.DropdownItem onClick={resetItem}>
              {placeholder}
            </Styled.DropdownItem>
          )}

          {options.map((option) => (
            <Styled.DropdownItem
              onClick={() => handleItemClick(option)}
              key={option.value}
            >
              {t(option.value)}
            </Styled.DropdownItem>
          ))}

          {otheroption && (
            <Styled.DropdownItem onClick={() => handleItemClick(other)}>
              {t(other.value)}
            </Styled.DropdownItem>
          )}
        </Styled.DropdownContent>
      )}
    </Styled.AuthDropdownContainer>
  );
}

AuthDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  selectedvalue: PropTypes.string,
  otheroption: PropTypes.bool,
  onDropdownChange: PropTypes.func.isRequired,
};

AuthDropdown.defaultProps = {
  placeholder: '',
  title: '',
  required: false,
  selectedvalue: '',
  otheroption: false,
};
