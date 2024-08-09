import React, { useContext, useEffect, useState } from 'react';
import Prop from 'prop-types';
import * as Styled from './AuthQualCheck-Styles';
import {
  AuthRadioContainer,
} from '../AuthRadio/AuthRadio-Styles';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthFile } from '../AuthFile/AuthFile';
import { AuthRadio } from '../AuthRadio/AuthRadio';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';

export function AuthQualCheck({
  title, groupname, onChange, selectedvalue,
}) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [selectedOption, setSelectedOption] = useState(selectedvalue);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <Styled.AuthQualCheckContainer>

      <AuthRadioContainer>

        <AuthRadio
          title={title}
          options={s2tState.formOptions.qual}
          groupname={groupname}
          selectedvalue={selectedOption !== 'n/a' ? 'yes' : selectedOption}
          onChange={(option) => handleRadioChange(option)}
        />

        {selectedOption !== 'n/a' && (
          <>
            <AuthInput
              type="string"
              name="qualNote_input"
              id="qualNote_input"
              title="Nota"
              placeholder="Insira sua nota final"
              value={selectedvalue === 'yes' ? '' : selectedvalue}
              onChange={(e) => onChange(e.target.value)}
              required
            />

            {/* Função de receber certificado desativada */}
            {/* <AuthFile text="Comprovante / Certificado (Opcional)" id={`${groupname}_certificate`} accept="image/jpeg, image/png, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" /> */}
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
  selectedvalue: Prop.string,
};
