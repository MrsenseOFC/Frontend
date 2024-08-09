import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import * as Styled from './AuthHistoric-Styles';
import { AuthInput } from '../AuthInput/AuthInput';
import { theme } from '../../../../styles/theme';
import { Button } from '../../Button/Button';
import { AuthCheckbox } from '../AuthCheckbox/AuthCheckbox';
import { AuthInfo } from '../AuthInfo/AuthInfo';
import { removeAcademicHistory, removeClubHistory } from '../../../../contexts/userContext/PlayerProvider/playerActions';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';

export function AuthHistoric({
  title = '', id, inputtitle, placeholder, historic, onChangeName, onChangeEarliestDate, onChangeLatestDate, onClick,
  nameValue, earliestDateValue, latestDateValue,
}) {
  const [isActual, setIsActual] = useState(false);

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const handleIsActual = (e) => {
    setIsActual(!isActual);
    onChangeLatestDate(e);
  };

  const handleRemoveItem = (item) => {
    if (id === 'playerClubHistory') {
      removeClubHistory(playerDispatch, item);
    }

    if (id === 'playerAcademicHistory') {
      removeAcademicHistory(playerDispatch, item);
    }
  };

  return (
    <Styled.AuthHistoricContainer>

      <Styled.AuthHistoricTitle>
        {title}
      </Styled.AuthHistoricTitle>

      {historic && historic.map((item) => (
        <AuthInfo key={item.id} text={`${item.name} | ${item.earliestDate.slice(0, 4)}`} onclick={() => handleRemoveItem(item)} />
      ))}

      <AuthInput
        type="text"
        name={`${id}_input`}
        id={`${id}_input`}
        placeholder={placeholder}
        title={inputtitle}
        onChange={onChangeName}
        value={nameValue}
      />

      <AuthInput
        type="date"
        name={`${id}EarliestDate_input`}
        id={`${id}EarliestDate_input`}
        placeholder="Ano de entrada"
        title="Entrada"
        onChange={onChangeEarliestDate}
        value={earliestDateValue}
      />

      {!isActual && (
      <AuthInput
        type="date"
        name={`${id}LatestDate_input`}
        id={`${id}LatestDate_input`}
        placeholder="Ano de saída"
        title="Saída"
        onChange={onChangeLatestDate}
        value={latestDateValue}
      />
      )}

      <AuthCheckbox
        id={`isActual${id}`}
        value=""// proposialmente vazio para poder resetar o latestDate quando o usuário marcar a checkbox
        text={`Atual ${inputtitle}`}
        onChange={(e) => handleIsActual(e)}
        checked={isActual}
      />

      <Button
        text="Adicionar"
        bgcolor={theme.colors.quaternary}
        bghover={theme.colors.secondary}
        textcolor={theme.colors.white}
        texthover={theme.colors.white}
        border={theme.colors.tertiary}
        borderhover={theme.colors.white}
        onclick={onClick}
      />
    </Styled.AuthHistoricContainer>
  );
}

AuthHistoric.propTypes = {
  title: Prop.string,
  inputtitle: Prop.string,
  placeholder: Prop.string,
  id: Prop.string.isRequired,
  historic: Prop.arrayOf(Prop.object),
  onChangeName: Prop.func,
  onChangeEarliestDate: Prop.func,
  onChangeLatestDate: Prop.func,
  nameValue: Prop.string,
  earliestDateValue: Prop.string,
  latestDateValue: Prop.string,
  onClick: Prop.func,
};
