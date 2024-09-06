import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Privacy-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { Column } from '../../../../components/ColumnContainer/Column';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';

export function Privacy({ children }) {
  const { t } = useTranslation();

  return (
    <Styled.PrivacyWrapper>
      <Styled.PrivacyContainer>

        <Title text={t('privacy_police_title')} uppercase />

        <Column>
          <Text text={t('privacy_police_text_1')} />
          <Text text={t('privacy_police_text_2')} />
          <Text text={t('privacy_police_text_3')} />
          <Text text={t('privacy_police_text_4')} />
        </Column>

        <Column>
          <Subtitle text={t('information_we_collect_title')} as="h3" uppercase />
          <Text text={t('information_we_collect_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('information_we_collect_subtitle_1')} as="h4" />
          <Text text={t('information_we_collect_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('information_we_collect_subtitle_2')} as="h4" />
          <Text text={t('information_we_collect_text_3')} />
          <Text text={t('information_we_collect_text_4')} />
        </Column>

        <Column>
          <Subtitle text={t('information_we_collect_subtitle_3')} as="h4" />
          <Text text={t('information_we_collect_text_5')} />
          <Text text={t('information_we_collect_text_6')} />
          <Text text={t('information_we_collect_text_7')} />
          <Text text={t('information_we_collect_text_8')} />
          <Text text={t('information_we_collect_text_9')} />
        </Column>

        <Column>
          <Subtitle text={t('information_we_collect_subtitle_4')} as="h4" />
          <Text text={t('information_we_collect_text_10')} />
        </Column>

        <Column>
          <Subtitle text={t('how_use_information_title')} as="h3" uppercase />
          <Text text={t('how_use_information_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('how_use_information_subtitle_1')} as="h4" />
          <Text text={t('how_use_information_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('how_use_information_subtitle_2')} as="h4" />
          <Text text={t('how_use_information_text_3')} />
        </Column>

        <Column>
          <Subtitle text={t('how_use_information_subtitle_3')} as="h4" />
          <Text text={t('how_use_information_text_4')} />
        </Column>

        <Column>
          <Subtitle text={t('how_use_information_subtitle_4')} as="h4" />
          <Text text={t('how_use_information_text_5')} />
        </Column>

        <Column>
          <Subtitle text={t('how_use_information_subtitle_5')} as="h4" />
          <Text text={t('how_use_information_text_6')} />
        </Column>

        <Column>
          <Subtitle text={t('how_use_information_subtitle_6')} as="h4" />
          <Text text={t('how_use_information_text_7')} />
        </Column>

        <Column>
          <Subtitle text={t('how_use_information_subtitle_7')} as="h4" />
          <Text text={t('how_use_information_text_8')} />
        </Column>

        <Column>
          <Subtitle text={t('how_use_information_subtitle_8')} as="h4" />
          <Text text={t('how_use_information_text_9')} />
        </Column>

        <Column>
          <Subtitle text={t('publicly_available_information_title')} as="h3" uppercase />
          <Text text={t('publicly_available_information_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('how_we_share_your_information_title')} as="h3" uppercase />
          <Text text={t('how_we_share_your_information_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('how_we_share_your_information_subtitle_1')} as="h4" />
          <Text text={t('how_we_share_your_information_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('how_we_share_your_information_subtitle_2')} as="h4" />
          <Text text={t('how_we_share_your_information_text_3')} />
        </Column>

        <Column>
          <Subtitle text={t('how_we_share_your_information_subtitle_3')} as="h4" />
          <Text text={t('how_we_share_your_information_text_4')} />
        </Column>

        <Column>
          <Subtitle text={t('how_we_share_your_information_subtitle_4')} as="h4" />
          <Text text={t('how_we_share_your_information_text_5')} />
        </Column>

        <Column>
          <Subtitle text={t('how_we_share_your_information_subtitle_5')} as="h4" />
          <Text text={t('how_we_share_your_information_text_6')} />
        </Column>

        <Column>
          <Subtitle text={t('our_use_of_cookies_title')} as="h3" uppercase />
          <Text text={t('our_use_of_cookies_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('our_use_of_cookies_subtitle_1')} as="h4" />
          <Text text={t('our_use_of_cookies_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('our_use_of_cookies_subtitle_2')} as="h4" />
          <Text>
            {t('our_use_of_cookies_text_3')}
            {' '}
            <StyledLink text={t('our_use_of_cookies_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('our_use_of_cookies_text_4')}
            {' '}
            <StyledLink text={t('our_use_of_cookies_link_2')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
        </Column>

        <Column>
          <Subtitle text={t('our_use_of_cookies_subtitle_3')} as="h4" />
          <Text text={t('our_use_of_cookies_text_5')} />
        </Column>

        <Column>
          <Subtitle text={t('our_use_of_cookies_subtitle_4')} as="h4" />
          <Text text={t('our_use_of_cookies_text_6')} />
          <Text>
            {t('our_use_of_cookies_text_7')}
            {' '}
            <StyledLink text={t('our_use_of_cookies_link_3')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('our_use_of_cookies_text_8')}
            {' '}
            <StyledLink text={t('our_use_of_cookies_link_4')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('our_use_of_cookies_text_9')}
            {' '}
            <StyledLink text={t('our_use_of_cookies_link_5')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('our_use_of_cookies_text_10')}
            {' '}
            <StyledLink text={t('our_use_of_cookies_link_6')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
        </Column>

        <Column>
          <Subtitle text={t('security_of_your_information_title')} as="h3" uppercase />
          <Text text={t('security_of_your_information_text_1')} />
          <Text text={t('security_of_your_information_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('acess_personal_information_title')} as="h3" uppercase />
          <Text text={t('acess_personal_information_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('your_choices_title')} as="h3" uppercase />
          <Text text={t('your_choices_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('children_under_title')} as="h3" uppercase />
          <Text text={t('children_under_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('third_party_links_title')} as="h3" uppercase />
          <Text text={t('third_party_links_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('changes_privacy_policy_title')} as="h3" uppercase />
          <Text text={t('changes_privacy_policy_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('privacy_contact_us_title')} as="h3" uppercase />
          <Text text={t('privacy_contact_us_text_1')} />
        </Column>

      </Styled.PrivacyContainer>
    </Styled.PrivacyWrapper>
  );
}

Privacy.propTypes = {
  children: Prop.node.isRequired,
};
