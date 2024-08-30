import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './Benefits-Styles';
import { S2tProvider } from '../../contexts/s2tContext/S2tProvider';
import { StandardHeader } from '../../components/Headers/StandardHeader/StandardHeader';
import { Nav } from '../../components/Nav/Nav';
import { Button } from '../../components/elements/Button/Button';
import { theme } from '../../styles/theme';
import { Logo } from '../../components/elements/Logo/Logo';
import { Slide } from '../../components/elements/Slide/Slide';
import { s2tData } from '../../contexts/s2tContext/s2tData';
import { MobileNav } from '../../components/MobileNav/MobileNav';
import { IconDiv } from '../../components/elements/IconDiv/IconDiv';
import { FloatingHeader } from '../../components/Headers/FloatingHeader/FloatingHeader';

export function Benefits() {
  const [mobileHeader, setMobileHeader] = useState(false);

  const { t } = useTranslation();

  return (
    <Styled.BenefitsPage>

      <FloatingHeader>

        <Logo size="150px" logo="/assets/images/pngs/logo.png" />

        <Nav>

          <Button
            path="/"
            text={t('home_page')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/player-dashboard"
            text={t('my_area')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/benefits"
            text={t('benefits')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />
        </Nav>

        {mobileHeader ? (
          <IconDiv name={t('menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name={t('close_menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <MenuIcon />
          </IconDiv>
        ) }
      </FloatingHeader>

      {mobileHeader && (
        <MobileNav>
          <Button
            path="/"
            text={t('home_page')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/player-dashboard"
            text={t('my_area')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/player-dashboard"
            text={t('benefits')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />
        </MobileNav>
      )}

      <S2tProvider>
        <Outlet />
      </S2tProvider>

    </Styled.BenefitsPage>
  );
}

Benefits.propTypes = {

};
