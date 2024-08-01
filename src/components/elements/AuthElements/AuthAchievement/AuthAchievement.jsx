import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthAchievement-Styles';
import { AuthInfo } from '../AuthInfo/AuthInfo';
import { AuthInput } from '../AuthInput/AuthInput';
import { Button } from '../../Button/Button';
import { theme } from '../../../../styles/theme';

export function AuthAchievement({
  title = '', id, inputtitle, placeholder, achievements, onChangeName, onChangeDate, onClick,
  nameValue, dateValue,
}) {
  const handleRemoveItem = (item) => {
    window.alert('Acessar AuthHistoric e inserir lógica para remover o item clicado no backend');
  };

  return (
    <Styled.AuthAchievementContainer>

      <Styled.AuthAchievementTitle>
        {title}
      </Styled.AuthAchievementTitle>

      {achievements && achievements.map((item) => (
        <AuthInfo key={item.id} text={`${item.name} | ${item.date.slice(0, 4)}`} onclick={() => handleRemoveItem(item)} />
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
        name={`${id}AchievementYear_input`}
        id={`${id}AchievementYear_input`}
        placeholder="Ano da conquista"
        title="Data"
        onChange={onChangeDate}
        value={dateValue}
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

    </Styled.AuthAchievementContainer>
  );
}

AuthAchievement.propTypes = {
  title: Prop.string,
  inputtitle: Prop.string,
  placeholder: Prop.string,
  id: Prop.string.isRequired,
  achievements: Prop.arrayOf(Prop.object),
  onChangeName: Prop.func,
  onChangeDate: Prop.func,
  onClick: Prop.func,
  nameValue: Prop.string,
  dateValue: Prop.string,
};
