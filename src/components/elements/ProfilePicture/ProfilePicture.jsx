import React, { useContext, useEffect, useState } from 'react';
import Prop from 'prop-types';
import { ImageAdd as AddImageIcon } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './ProfilePicture-Styles';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { useAuth } from '../../../contexts/AuthContext/AuthContext.tsx';

export function ProfilePicture({
  badge = '', type = '', competitivecategory, ownerview,
}) {
  const { currentUser } = useAuth();
  const [profilePicture, setProfilePicture] = useState(currentUser?.profileImage || '');
  const { t } = useTranslation();

  const handlePictureChange = async (event) => {
    if (!currentUser) {
      console.error(t('not_logged'));
      return;
    }

    const newFile = event.target.files[0];
    if (newFile) {
      const formData = new FormData();
      formData.append('image_file', newFile);

      try {
        const response = await axios.post(
          `http://localhost:7320/api/userPhotos/${currentUser.id}/upload`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        setProfilePicture(response.data.image_file);
      } catch (error) {
        console.error(t('image_upload_error'), error.response ? error.response.data : error.message);
      }
    }
  };

  useEffect(() => {
    setProfilePicture(currentUser?.profileImage || '');
  }, [currentUser]);

  return (
    <Styled.ProfilePictureContainer>
      <Styled.ProfilePictureElement>
        <Styled.Picture
          src={
            profilePicture
              ? `http://localhost:7320/uploads/${profilePicture}`
              : '/assets/images/logos/vertical-background.png'
          }
          alt={t('profile_picture')}
        />
        {ownerview && (
          <Styled.Badge>
            <AuthIconFile
              id="changeProfilePicture"
              hovercolor={theme.colors.primary}
              name={t('change_profile_picture_button')}
              onChange={handlePictureChange}
            >
              <AddImageIcon />
            </AuthIconFile>
          </Styled.Badge>
        )}
      </Styled.ProfilePictureElement>
      {type && (
        <Button
          text={`${type}  ${competitivecategory || ''}`}
          bgcolor={theme.colors.secondary}
          bghover={theme.colors.secondary}
          textcolor={theme.colors.black}
          texthover={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
        />
      )}
    </Styled.ProfilePictureContainer>
  );
}

ProfilePicture.propTypes = {
  competitivecategory: Prop.string,
  badge: Prop.string,
  type: Prop.string,
  ownerview: Prop.bool.isRequired,
};
