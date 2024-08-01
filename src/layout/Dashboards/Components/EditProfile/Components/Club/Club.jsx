import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Styled from './Club-Styles';

import { AuthForm } from '../../../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthWrapper } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../../../styles/theme';
import { AuthContainer } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { AuthHistoric } from '../../../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { Row } from '../../../../../../components/RowContainer/Row';
import { AuthFile } from '../../../../../../components/elements/AuthElements/AuthFile/AuthFile';
import { AuthAchievement } from '../../../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { ClubContext } from '../../../../../../contexts/userContext/ClubProvider/ClubContext';

export function Club() {
  const navigate = useNavigate();

  // const clubContext = useContext();
  // const { clubState, clubDispatch } = ClubContext;

  const [profileData, setProfileData] = useState({
    representative: '',
    foundationDate: '',
    country: '',
    state: '',
    trainingCenter: '',
    stadium: '',
    coach: '',
  });

  const [competitionHistory, setCompetitionHistory] = useState(
    {
      name: '',
      date: '',
    },
  );

  const handleAddCompetition = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (competitionHistory.name && competitionHistory.date) {
      // lógica para alterar o histórico de clubes no backend
      try {
        const response = await axios.post('api', competitionHistory);
        console.log('Perfil alterado com sucesso:', response.data);

        // Reseta o estado local
        setCompetitionHistory({
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

  console.log(profileData);

  return (
    <Styled.ClubContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text="Seu perfil (Clube)" size={theme.sizes.xlarge} />

            <AuthInput
              type="text"
              name="clubRepresentative_input"
              id="clubRepresentative_input"
              title="Representante"
              placeholder="Nome do representante do Clube"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, representative: e.target.value }))}
            />

            <AuthInput
              type="date"
              name="clubRoundationDate_input"
              id="clubFoundationDate_input"
              title="Data de fundação"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, foundationDate: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubCountry_input"
              id="clubCountry_input"
              title="País"
              placeholder="De qual país é o clube"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, country: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubState_input"
              id="clubState_input"
              title="Estado"
              placeholder="De qual estado é o clube"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, state: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubTrainingCenter_input"
              id="clubTrainingCenter_input"
              title="Local de treinamento"
              placeholder="Onde o clube realiza os treinamentos"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, trainingCenter: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubStadium_input"
              id="clubStadium_input"
              title="Nome do estádio"
              placeholder="Estádio ou arena do clube"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, stadium: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubCoach_input"
              id="clubCoach_input"
              title="Técnico ou treinador"
              placeholder="Atual técnico ou treinador do clube"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, coach: e.target.value }))}
            />

            <Row>
              <AuthAchievement
                title="Competições em disputa"
                id="clubCompetitions"
                inputtitle="Competição"
                placeholder="Nome da competição"
              // Histórico do usuário (Dados anteriores que já estão salvos)
              // historic={clubState.profile.leagues} desabilitado temporariamente
              // OnChanges para atualizar o competionHistory
                onChangeName={(e) => setCompetitionHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setCompetitionHistory((prevData) => ({ ...prevData, date: e.target.value }))}
              // Values para sincronizar os inputs com o estado do competionHistory
                nameValue={competitionHistory.name}
                DateValue={competitionHistory.date}
                onClick={(e) => handleAddCompetition(e)}
              />

              <AuthAchievement
                title="Histórico de títulos e prêmios"
                id="clubAwardsHistory"
                inputtitle="Competição / Prêmio"
                placeholder="Nome da competição ou prêmio"
                // Histórico do usuário (Dados anteriores que já estão salvos)
                // achievements={clubState.profile.championships} temporariamente desabilitado
              // OnChanges para atualizar o awardHistory
                onChangeName={(e) => setAwardHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setAwardHistory((prevData) => ({ ...prevData, date: e.target.value }))}
              // Values para sincronizar os inputs com o estado do awardHistory
                nameValue={awardHistory.name}
                dateValue={awardHistory.date}
                onClick={(e) => handleAddAward(e)}
              />
            </Row>

            <AuthButton
              name="editClubProfile_submit"
              id="editClubProfile_submit"
              value="Confirmar alteração"
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.ClubContainer>

  );
}
