import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ImageAdd as AddImageIcon } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './ProfilePicture-Styles';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { useAuth } from '../../../contexts/AuthContext/AuthContext.tsx';
import API_BASE_URL from '../../../../config'; // Importa a URL base

export function ProfilePicture({
  badge = '', type = '', competitivecategory, ownerview,
}) {
  const { currentUser, updateProfileImage } = useAuth();
  const [profilePicture, setProfilePicture] = useState('');
  const { t } = useTranslation();

  const userId = currentUser?.id;

  useEffect(() => {
    // Define a imagem de perfil inicial a partir do usuário atual
    if (currentUser?.profileImage) {
      setProfilePicture(currentUser.profileImage);
    } else if (userId) {
      fetchProfilePicture(); // Se não houver, busca no backend
    }
  }, [currentUser, userId]);

  const fetchProfilePicture = async () => {
    if (userId) {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/profilePicture/${userId}`);
        const imageUrl = response.data.image_url || '';
        setProfilePicture(imageUrl);
      } catch (error) {
        console.error(t('image_load_error'), error.response ? error.response.data : error.message);
      }
    }
  };

  const handlePictureChange = async (event) => {
    const newFile = event.target.files[0];
    if (newFile) {
      const formData = new FormData();
      formData.append('profileImage', newFile);

      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/profilePicture/upload/${userId}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        const updatedImageUrl = response.data.image_url;
        setProfilePicture(updatedImageUrl);
        updateProfileImage(updatedImageUrl); // Atualiza a imagem no contexto
      } catch (error) {
        console.error(t('image_upload_error'), error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <Styled.ProfilePictureContainer>
      <Styled.ProfilePictureElement>
        <Styled.Picture
          src={profilePicture ? `${API_BASE_URL}${profilePicture}` : '/assets/images/logos/vertical-background.png'}
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
  competitivecategory: PropTypes.string,
  badge: PropTypes.string,
  type: PropTypes.string,
  ownerview: PropTypes.bool.isRequired,
};
