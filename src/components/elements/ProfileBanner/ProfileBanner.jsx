import Prop from 'prop-types';
import React, { useState } from 'react';
import { ImageAdd as AddImageIcon } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './ProfileBanner-Styles';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../styles/theme';
import { Button } from '../Button/Button';
import { Nav } from '../../Nav/Nav';
import { useAuth } from '../../../contexts/AuthContext/AuthContext';

export function ProfileBanner({ backgroundimagesrc, children, ownerview }) {
  const { currentUser } = useAuth();
  const [bannerPicture, setBannerPicture] = useState(currentUser?.profileImage || '');
  const { t } = useTranslation();

  const handleBannerChange = async (event) => {
    if (!currentUser) {
      console.error(t('not_logged'));
      return;
    }

    const newFile = event.target.files[0];

    if (newFile) {
      const formData = new FormData();
      formData.append('image_file', newFile);

      try {
        const response = await axios.post(`https://talent2show.onrender.com/api/userPhotos/${currentUser.id}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setBannerPicture(response.data.image_file);
      } catch (error) {
        console.error(t('image_upload_error'), error);
      }
    }
  };

  // useEffect(() => {
  //   setProfilePicture(currentUser?.profileImage || '');
  // }, [currentUser]);

  return (
    <Styled.ProfileBannerWrapper backgroundimagesrc={backgroundimagesrc}>

      <Styled.ProfileBannerContainer>
        {children}
      </Styled.ProfileBannerContainer>

      {ownerview && (
        <AuthIconFile
          id="changeBannerPicture"
          name={t('change_banner_button')}
          hovercolor={theme.colors.primary}
          onChange={handleBannerChange}
        >
          <AddImageIcon />
        </AuthIconFile>
      )}

    </Styled.ProfileBannerWrapper>
  );
}

ProfileBanner.propTypes = {
  children: Prop.node.isRequired,
  ownerview: Prop.bool,
  backgroundimagesrc: Prop.string,
};
