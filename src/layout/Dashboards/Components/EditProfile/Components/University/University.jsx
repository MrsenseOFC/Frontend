import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Styled from './University-Styles';

import { AuthForm } from '../../../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthWrapper } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../../../styles/theme';
import { AuthContainer } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { Row } from '../../../../../../components/RowContainer/Row';
import { AuthFile } from '../../../../../../components/elements/AuthElements/AuthFile/AuthFile';
import { AuthAchievement } from '../../../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { UniversityContext } from '../../../../../../contexts/userContext/UniversityProvider/UniversityContext';

export function University() {
  const navigate = useNavigate();

  const universityContext = useContext(UniversityContext);
  const { universityState, univeristyDispatch } = universityContext;

  const [profileData, setProfileData] = useState({
    representative: '',
    foundationDate: '',
    country: '',
    state: '',
    trainingCenter: '',
    stadium: '',
    coach: '',
  });

  const [awardHistory, setAwardHistory] = useState(
    {
      name: '',
      date: '',
    },
  );

  const handleAddAward = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (awardHistory.name && awardHistory.date) {
      // lógica para alterar o histórico de títulos e prêmios no backend
      try {
        const response = await axios.post('api', awardHistory);
        console.log('Perfil alterado com sucesso:', response.data);

        // Reseta o estado local
        setAwardHistory({
          name: '',
          date: '',
        });
      } catch (error) {
        console.error('Erro ao editar perfil:', error);
      }
    } else {
      console.error('Por favor, preencha todos os campos.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (profileData) {
      try {
        const response = await axios.post('api', profileData);
        console.log('Perfil alterado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao editar perfil:', error);
      }
    }
  };

  return (
    <Styled.UniversityContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text="Seu perfil (Universidade)" size={theme.sizes.xlarge} />

            <AuthInput
              type="text"
              name="universityRepresentative_input"
              id="universityRepresentative_input"
              title="Representante"
              placeholder="Nome do representante da universidade"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, representative: e.target.value }))}
            />

            <AuthInput
              type="date"
              name="universityFoundationDate_input"
              id="universityFoundationDate_input"
              title="Data de fundação"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, foundationDate: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityCountry_input"
              id="universityCountry_input"
              title="País"
              placeholder="De qual país é a universidade"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, country: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityState_input"
              id="universityState_input"
              title="Estado"
              placeholder="De qual estado é a universidade"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, state: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityTrainingCenter_input"
              id="universityTrainingCenter_input"
              title="Local de treinamento"
              placeholder="Onde a universidade realiza os treinamentos"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, trainingCenter: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityStadium_input"
              id="universityStadium_input"
              title="Nome do estádio"
              placeholder="Estádio ou arena da universidade"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, stadium: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityCoach_input"
              id="universityCoach_input"
              title="Treinador"
              placeholder="Atual treinador da universidade"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, coach: e.target.value }))}
            />

            <Row>
              <AuthAchievement
                title="Histórico de títulos e prêmios"
                id="universityAwardsHistory"
                inputtitle="Competição / Prêmio"
                placeholder="Nome da competição ou prêmio"
              // Histórico do usuário (Dados anteriores que já estão salvos)
                historic={universityState.profile.leagues}
              // OnChanges para atualizar o competionHistory
                onChangeName={(e) => setAwardHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setAwardHistory((prevData) => ({ ...prevData, date: e.target.value }))}
              // Values para sincronizar os inputs com o estado do awardHistory
                nameValue={awardHistory.name}
                dateValue={awardHistory.date}
                onClick={(e) => handleAddAward(e)}
              />
            </Row>

            <AuthButton
              name="editUniversityProfile_submit"
              id="editUniversityProfile_submit"
              value="Confirmar alteração"
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.UniversityContainer>

  );
}
