import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Settings } from '@styled-icons/fluentui-system-filled';
import { useTranslation } from 'react-i18next';
import * as Styled from './StaffDashboard-Styles';
import { theme } from '../../../styles/theme';

import { ProfilePicture } from '../../../components/elements/ProfilePicture/ProfilePicture';
import { Slide } from '../../../components/elements/Slide/Slide';
import { ProfileName } from '../../../components/elements/ProfileName/ProfileName';
import { ProfileHeader } from '../../../components/ProfileHeader/ProfileHeader';
import { Button } from '../../../components/elements/Button/Button';
import { MobileMenu } from '../../../components/MobileMenu/MobileMenu';
import { FloatingIcon } from '../../../components/elements/FloatingIcon/FloatingIcon';
import { ProfileBanner } from '../../../components/elements/ProfileBanner/ProfileBanner';
import { Column } from '../../../components/ColumnContainer/Column';
import { IconDiv } from '../../../components/elements/IconDiv/IconDiv';
import { Row } from '../../../components/RowContainer/Row';
import { FloatingMenu } from '../../../components/FloatingMenu/FloatingMenu';
import { SettingsMenu } from '../../../components/FloatingMenu/Components/SettingsMenu/SettingsMenu';
import { StaffNav } from '../../../components/ProfileHeader/Components/StaffNav/StaffNav';
import { StaffMenu } from '../../../components/MobileMenu/Components/StaffMenu/StaffMenu';
import { FloatingHeader } from '../../../components/Headers/FloatingHeader/FloatingHeader';
import { Nav } from '../../../components/Nav/Nav';
import { StaffContext } from '../../../contexts/userContext/StaffProvider/StaffContext';

export function StaffDashboard() {
  const { t } = useTranslation();
  const staffContext = useContext(StaffContext);
  const { staffState, staffDispatch } = staffContext;

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [settingsMenuVisibility, setSettingsMenuVisibility] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false);

  return (
    <Styled.StaffDashboardContainer>

      <FloatingHeader>

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
            path="/staff-dashboard"
            text={t('my_area')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />

          <Button
            path="/benefits"
            text={t('benefits')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
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
      <FloatingMenu>
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
          path="/staff-dashboard"
          text={t('my_area')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.black}
          textcolor={theme.colors.primary}
          texthover={theme.colors.primary}
          border={theme.colors.primary}
          borderhover={theme.colors.primary}
          active
        />

        <Button
          path="/benefits"
          text={t('benefits')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

      </FloatingMenu>

      )}

      <ProfileBanner backgroundimagesrc={staffState.profile.banner.backgroundImageSrc}>
        <ProfilePicture
          imagesrc={staffState.profile.banner.profileImageSrc}
          badge={staffState.profile.banner.badge}
          type={t(staffState.profile.info.profileType)}
          ownerview
        />

        <ProfileName name={staffState.profile.banner.name} />

        <Row>
          <Button
            path="profile-edit"
            text={t('edit_profile')}
            bgcolor={theme.colors.primary}
            bghover={theme.colors.black}
            textcolor={theme.colors.black}
            texthover={theme.colors.primary}
            border={theme.colors.black}
            borderhover={theme.colors.primary}
          />
          <IconDiv
            active={settingsMenuVisibility}
            hovercolor={theme.colors.primary}
            name={t('settings')}
            onclick={() => setSettingsMenuVisibility(!settingsMenuVisibility)}
          >
            <Settings />
          </IconDiv>

          {settingsMenuVisibility && (
          <FloatingMenu onclick={() => setSettingsMenuVisibility(false)}>
            <SettingsMenu />
          </FloatingMenu>
          )}

        </Row>

      </ProfileBanner>

      <ProfileHeader>
        <StaffNav />
      </ProfileHeader>

      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <StaffMenu />
        </MobileMenu>
      ) : (
        <FloatingIcon name={t('menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
          <MenuIcon />
        </FloatingIcon>
      )}

      <Column color={theme.colors.black}>
        <Outlet />
      </Column>

      <Slide items={staffState.benefits} title={t('my_benefits')} />

    </Styled.StaffDashboardContainer>
  );
}
