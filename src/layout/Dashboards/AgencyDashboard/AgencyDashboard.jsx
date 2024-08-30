import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Settings as SettingsIcon, Share } from '@styled-icons/fluentui-system-filled';
import { useTranslation } from 'react-i18next';
import * as Styled from './AgencyDashboard-Styles';
import { theme } from '../../../styles/theme';
import { ProfilePicture } from '../../../components/elements/ProfilePicture/ProfilePicture';
import { ColumnContainer } from '../../../components/ColumnContainer/Column-Styles';
import { Slide } from '../../../components/elements/Slide/Slide';
import { ProfileName } from '../../../components/elements/ProfileName/ProfileName';
import { ProfileHeader } from '../../../components/ProfileHeader/ProfileHeader';
import { Button } from '../../../components/elements/Button/Button';
import { S2tProvider } from '../../../contexts/s2tContext/S2tProvider';
import { PlayerProvider } from '../../../contexts/userContext/PlayerProvider/PlayerProvider';
import { MobileMenu } from '../../../components/MobileMenu/MobileMenu';
import { FloatingIcon } from '../../../components/elements/FloatingIcon/FloatingIcon';
import { AgencyContext } from '../../../contexts/userContext/AgencyProvider/AgencyContext';
import { ProfileBanner } from '../../../components/elements/ProfileBanner/ProfileBanner';
import { AgencyNav } from '../../../components/ProfileHeader/Components/AgencyNav/AgencyNav';
import { AgencyMenu } from '../../../components/MobileMenu/Components/AgencyMenu/AgencyMenu';
import { Row } from '../../../components/RowContainer/Row';
import { IconDiv } from '../../../components/elements/IconDiv/IconDiv';
import { FloatingMenu } from '../../../components/FloatingMenu/FloatingMenu';
import { SettingsMenu } from '../../../components/FloatingMenu/Components/SettingsMenu/SettingsMenu';
import { FloatingHeader } from '../../../components/Headers/FloatingHeader/FloatingHeader';
import { Nav } from '../../../components/Nav/Nav';
import { ShareMenu } from '../../../components/FloatingMenu/Components/ShareMenu/ShareMenu';

export function AgencyDashboard() {
  const { t } = useTranslation();

  const agencyContext = useContext(AgencyContext);
  const { agencyState, agencyDispatch } = agencyContext;

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [settingsMenuVisibility, setSettingsMenuVisibility] = useState(false);
  const [shareMenuVisibility, setShareMenuVisibility] = useState(false);

  const [mobileHeader, setMobileHeader] = useState(false);

  if (!agencyState.profile || !agencyState.profile.banner) {
    return <div>Loading...</div>;
  }

  const handleShareMenuVisibility = () => {
    setShareMenuVisibility(!shareMenuVisibility);
    setSettingsMenuVisibility(false);
  };

  const handleSettingsMenuVisibility = () => {
    setSettingsMenuVisibility(!settingsMenuVisibility);
    setShareMenuVisibility(false);
  };

  return (
    <Styled.AgencyDashboardContainer>

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
            path="/agency-dashboard"
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
          path="/player-dashboard"
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

      <ProfileBanner backgroundimagesrc={agencyState.profile.banner.backgroundImageSrc} ownerview>
        <ProfilePicture
          imagesrc={agencyState.profile.banner.profileImageSrc}
          badge={agencyState.profile.banner.badge}
          ownerview
          type={agencyState.profile.info.profileType}
        />
        <ProfileName name={agencyState.profile.banner.name} />
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
            onclick={handleSettingsMenuVisibility}
          >
            <SettingsIcon />
          </IconDiv>

          <IconDiv
            active={shareMenuVisibility}
            hovercolor={theme.colors.primary}
            name={t('share')}
            onclick={handleShareMenuVisibility}
          >
            <Share />
          </IconDiv>

          {settingsMenuVisibility && (
          <FloatingMenu onclick={() => setSettingsMenuVisibility(false)}>
            <SettingsMenu />
          </FloatingMenu>
          )}

          {shareMenuVisibility && (
          <FloatingMenu onclick={() => setShareMenuVisibility(false)}>
            <ShareMenu />
          </FloatingMenu>
          )}

        </Row>

      </ProfileBanner>

      {/* Aparece apenas em telas maiores que 768px */}
      <ProfileHeader>
        <AgencyNav />
      </ProfileHeader>

      {/* Aparece apenas em telas menores que 768px */}
      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <AgencyMenu />
        </MobileMenu>
      ) : (
        <FloatingIcon name={t('menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
          <MenuIcon />
        </FloatingIcon>
      )}

      <S2tProvider>
        <PlayerProvider>
          <ColumnContainer color={theme.colors.black}>
            <Outlet />
          </ColumnContainer>
        </PlayerProvider>
      </S2tProvider>

      <Slide items={agencyState.benefits} title={t('my_benefits')} />

    </Styled.AgencyDashboardContainer>
  );
}
