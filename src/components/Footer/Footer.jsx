import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Footer-Styles';
import { Row } from '../RowContainer/Row';
import { SocialLink } from '../elements/SocialLink/SocialLink';
import { Nav } from '../Nav/Nav';
import { StyledLink } from '../elements/StyledLink/StyledLink';
import { theme } from '../../styles/theme';
import { Text } from '../elements/Text/Text';

export function Footer({ children }) {
  const { t } = useTranslation();

  return (
    <Styled.FooterContainer>
      <Row>
        <SocialLink type="facebook" />
        <SocialLink type="instagram" />
        <SocialLink type="twitter" />
        <SocialLink type="youtube" />
        <SocialLink type="tiktok" />
      </Row>

      <Nav>
        <StyledLink text={t('privacity')} color={theme.colors.lightgray} hovercolor={theme.colors.white} />
        <StyledLink text={t('terms_of_use')} color={theme.colors.lightgray} hovercolor={theme.colors.white} />
        <StyledLink text={t('about_us')} color={theme.colors.lightgray} hovercolor={theme.colors.white} />
        <StyledLink text={t('need_help_question')} color={theme.colors.lightgray} hovercolor={theme.colors.white} />
      </Nav>

      <Text text="© 2024 Talent 2 Show" color={theme.colors.primary} uppercase />

    </Styled.FooterContainer>
  );
}

Footer.propTypes = {
  children: Prop.node.isRequired,
};
