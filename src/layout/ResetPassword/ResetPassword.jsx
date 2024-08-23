import Prop from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './ResetPassword-Styles';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { Title } from '../../components/elements/Title/Title';
import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { theme } from '../../styles/theme';
import { Popup } from '../../components/elements/Popup/Popup';

export function ResetPassword() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  // enviar os dados para o backend
  };

  return (
    <Styled.ResetPasswordPage>
      <AuthWrapper>

        <AuthContainer>

          <Title text={t('change_password')} size={theme.sizes.xxlarge} />

          <AuthForm>

            <AuthInput
              type="password"
              name="password_input"
              id="password_input"
              placeholder={t('insert_new_password')}
              title={t('new_password')}
              required
            />

            <AuthInput
              type="password"
              name="confirm_password_input"
              id="confirm_password_input"
              placeholder={t('insert_new_password_again')}
              title={t('confirm_new_password')}
              required
            />

            <AuthButton
              name="login_submit"
              id="login_submit"
              value={t('confirm_change')}
              onclick={handleSubmit}
            />

          </AuthForm>
        </AuthContainer>

        {isOpen && (
        <Popup
          title={t('password_changed_successfully')}
          firstoption={t('close')}
          firstpath="/login"
          isopen={isOpen}
          onclick={() => setIsOpen(!isOpen)}
        />
        )}

      </AuthWrapper>
    </Styled.ResetPasswordPage>
  );
}
