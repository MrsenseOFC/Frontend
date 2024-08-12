import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Staff-Styles';

import { AuthForm } from '../../../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthWrapper } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../../../styles/theme';
import { AuthContainer } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { AuthRadio } from '../../../../../../components/elements/AuthElements/AuthRadio/AuthRadio';
import { AuthHistoric } from '../../../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { Row } from '../../../../../../components/RowContainer/Row';
import { AuthAchievement } from '../../../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { AuthQualCheck } from '../../../../../../components/elements/AuthElements/AuthQualCheck/AuthQualCheck';
import { AuthDropdown } from '../../../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../../../../contexts/s2tContext/S2tContext';
import { StaffContext } from '../../../../../../contexts/userContext/StaffProvider/StaffContext';
import {
  addAcademicHistory, addClubHistory, addAwardHistory, changeProfileInfo,
} from '../../../../../../contexts/userContext/StaffProvider/staffActions';

export function Staff() {
  const navigate = useNavigate();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const staffContext = useContext(StaffContext);
  const { staffState, staffDispatch } = staffContext;

  const [profileData, setProfileData] = useState({
    ...staffState.profile.info,
  });

  // Calcula a idade do usuário baseado na data de nascimento
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(profileData.birthDate);
      if (birthDate) {
        const today = new Date();
        const ageInMilliseconds = today - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24
   * 365.25));
        setProfileData((prevData) => ({ ...prevData, age: ageInYears }));
      }
    };

    calculateAge();
  }, [profileData.birthDate]);

  // Historic Handlers
  const [clubHistory, setClubHistory] = useState(
    {
      name: '',
      earliestDate: '',
      latestDate: '',
    },
  );

  const handleAddClub = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (clubHistory.name && clubHistory.earliestDate) {
      addClubHistory(staffDispatch, clubHistory);

      setClubHistory({
        name: '',
        earliestDate: '',
        latestDate: '',
      });
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

      addAwardHistory(staffDispatch, awardHistory);

      setAwardHistory({
        name: '',
        date: '',
      });
    } else {
      console.error('Por favor, preencha todos os campos.');
    }
  };

  const [academicHistory, setAcademicHistory] = useState(
    {
      name: '',
      earliestDate: '',
      latestDate: '',
    },
  );

  const handleAddAcademic = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (academicHistory.name && academicHistory.earliestDate) {
      addAcademicHistory(staffDispatch, academicHistory);

      // Reseta o estado local
      setAcademicHistory({
        name: '',
        earliestDate: '',
        latestDate: '',
      });
    } else {
      console.error('Por favor, preencha todos os campos.');
    }
  };

  // Submit principal
  const handleSubmit = async (e) => {
    if (profileData) {
      e.preventDefault();
      changeProfileInfo(staffDispatch, profileData);
      navigate(-1);
    }
  };

  return (
    <Styled.StaffContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text="Seu perfil" size={theme.sizes.xlarge} />

            <AuthDropdown
              title="Qual o seu nível competitivo?"
              id="staffCompetitiveLevel"
              placeholder="Escolha o nível"
              options={s2tState.formOptions.competitiveLevels}
              selectedvalue={profileData.competitiveLevel}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthInput
              type="text"
              name="staffPrimaryBirthCountry_input"
              id="staffPrimaryBirthCountry_input"
              title="Nacionalidade primária"
              placeholder="Sua nacionalidade primária"
              value={profileData.primaryNationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, primaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="staffSecondaryBirthCountry_input"
              id="staffSecondaryBirthCountry_input"
              title="Nacionalidade secundária"
              placeholder="Sua nacionalidade secundária"
              value={profileData.secondaryNationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, secondaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="staffPassports_input"
              id="staffPassports_input"
              title="Possui passporte para algum país?"
              placeholder="Caso sim, liste os países"
              value={profileData.passports}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, passports: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="staffPayment_input"
              id="staffPayment_input"
              title="Salário"
              placeholder="Seu salário base"
              value={profileData.payment}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, payment: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="staffTransferValue_input"
              id="staffTransferValue_input"
              title="Valor de transferência"
              placeholder="Seu valor de transferência"
              value={profileData.transferValue}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, transferValue: e.target.value }))}
            />

            <Subtitle text="Sua história esportiva" size={theme.sizes.xlarge} />

            <Row>
              <AuthHistoric
              // Dados padrão do componente
                title="Histórico de clubes"
                id="staffClubHistory"
                inputtitle="Clube"
                placeholder="Nome do Clube"
              // Histórico do usuário (Dados anteriores que já estão salvos)
                historic={staffState.profile.clubs}
              // OnChanges para atualizar o clubHistory
                onChangeName={(e) => setClubHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeEarliestDate={(e) => setClubHistory((prevData) => ({ ...prevData, earliestDate: e.target.value }))}
                onChangeLatestDate={(e) => setClubHistory((prevData) => ({ ...prevData, latestDate: e.target.value || undefined }))}
              // Values para sincronizar os inputs com o estado do clubHistory
                nameValue={clubHistory.name}
                earliestDateValue={clubHistory.earliestDate}
                latestDateValue={clubHistory.latestDate}
                onClick={(e) => handleAddClub(e)}
              />

              <AuthAchievement
                title="Histórico de títulos e prêmios"
                id="staffAwardsHistory"
                inputtitle="Competição / Prêmio"
                placeholder="Nome da competição ou prêmio"
              // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={staffState.profile.awards}
              // OnChanges para atualizar o awardHistory
                onChangeName={(e) => setAwardHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setAwardHistory((prevData) => ({ ...prevData, date: e.target.value }))}
              // Values para sincronizar os inputs com o estado do awardHistory
                nameValue={awardHistory.name}
                dateValue={awardHistory.date}
                onClick={(e) => handleAddAward(e)}
              />
            </Row>

            <Subtitle text="Sua história acadêmica" size={theme.sizes.xlarge} />

            <AuthHistoric
              title="Conhecimentos"
              id="staffAcademicHistory"
              inputtitle="Formação"
              placeholder="Nome da formação"
            // Histórico do usuário (Dados anteriores que já estão salvos)
              historic={staffState.profile.studies}
            // OnChanges para atualizar o clubHistory
              onChangeName={(e) => setAcademicHistory((prevData) => ({ ...prevData, name: e.target.value }))}
              onChangeEarliestDate={(e) => setAcademicHistory((prevData) => ({ ...prevData, earliestDate: e.target.value }))}
              onChangeLatestDate={(e) => setAcademicHistory((prevData) => ({ ...prevData, latestDate: e.target.value || undefined }))}
            // Values para sincronizar os inputs com o estado do clubHistory
              nameValue={academicHistory.name}
              earliestDateValue={academicHistory.earliestDate}
              latestDateValue={academicHistory.latestDate}
              onClick={(e) => handleAddAcademic(e)}
            />
            <AuthButton
              name="editOStaffProfile_submit"
              id="editStaffProfile_submit"
              value="Confirmar alteração"
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.StaffContainer>

  );
}
