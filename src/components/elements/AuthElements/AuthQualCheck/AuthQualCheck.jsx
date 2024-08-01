import React, { useState } from 'react';
import Prop from 'prop-types';
import * as Styled from './AuthQualCheck-Styles';
import {
  AuthRadioContainer,
} from '../AuthRadio/AuthRadio-Styles';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthFile } from '../AuthFile/AuthFile';
import { AuthRadio } from '../AuthRadio/AuthRadio';

export function AuthQualCheck({
  title, groupname, onChange,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const qualOptions = [
    { value: 'yes', label: 'Sim' },
    { value: 'n/a', label: 'Não' },
  ];

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e);
  };

  return (
    <Styled.AuthQualCheckContainer>

      <AuthRadioContainer>

        <AuthRadio
          title={title}
          options={qualOptions}
          groupname={groupname}
          onClick={(e) => handleRadioChange(e)}
        />

        {selectedOption === 'yes' && (
          <>
            <AuthInput
              type="number"
              name="qualNote_input"
              id="qualNote_input"
              title="Nota"
              placeholder="Insira sua nota final"
              required
              onChange={onChange}
            />

            <AuthFile text="Comprovante / Certificado (Opcional)" id={`${groupname}_certificate`} accept="image/jpeg, image/png, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
          </>
        )}
      </AuthRadioContainer>
    </Styled.AuthQualCheckContainer>
  );
}

AuthQualCheck.propTypes = {
  title: Prop.string.isRequired,
  groupname: Prop.string.isRequired,
  onChange: Prop.func,
};
