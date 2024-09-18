import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Terms-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { Column } from '../../../../components/ColumnContainer/Column';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';

export function Terms({ children }) {
  const { t } = useTranslation();

  return (
    <Styled.TermsWrapper>
      <Styled.TermsContainer>

        <Title text={t('terms_of_use_title')} uppercase />

        <Column>
          <Text text={t('terms_of_use_text_1')} />
          <Text text={t('terms_of_use_text_2')} />
          <Text>
            {t('terms_of_use_text_3')}
            {' '}
            <StyledLink text={t('terms_of_use_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('terms_of_use_text_4')}
          </Text>

          <Text text={t('terms_of_use_text_5')} />

          <Text>
            {t('terms_of_use_text_6')}
            {' '}
            <StyledLink text={t('terms_of_use_link_2')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('terms_of_use_text_7')}
            {' '}
            <StyledLink text={t('terms_of_use_link_3')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('terms_of_use_text_8')}
          </Text>
        </Column>

        <Column>
          <Subtitle text={t('terms_of_use_highlights_title')} as="h3" uppercase />
          <Text>
            {t('terms_of_use_highlights_text_1')}
            {' '}
            <StyledLink text={t('terms_of_use_highlights_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
        </Column>

        <Column>
          <Text uppercase>
            <StyledLink uppercase text={t('highlight_1_title')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
          <Text text={t('highlight_1_text')} />
        </Column>

        <Column>
          <Text uppercase>
            <StyledLink uppercase text={t('highlight_2_title')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
          <Text text={t('highlight_2_text')} />
        </Column>

        <Column>
          <Text uppercase>
            <StyledLink uppercase text={t('highlight_3_title')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
          <Text text={t('highlight_3_text')} />
        </Column>

        <Column>
          <Text uppercase>
            <StyledLink uppercase text={t('highlight_4_title')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
          <Text text={t('highlight_4_text')} />
        </Column>

        <Column>
          <Text uppercase>
            <StyledLink uppercase text={t('highlight_5_title')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
          <Text text={t('highlight_5_text')} />
        </Column>

        <Column>
          <Text uppercase>
            <StyledLink uppercase text={t('highlight_6_title')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
          <Text text={t('highlight_6_text')} />
        </Column>

        <Column>
          <Text uppercase>
            <StyledLink uppercase text={t('highlight_7_title')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
          <Text text={t('highlight_7_text')} />
        </Column>

        <Column>
          <Text uppercase>
            <StyledLink uppercase text={t('highlight_8_title')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
          <Text text={t('highlight_8_text')} />
        </Column>

        <Column>
          <Text uppercase>
            <StyledLink uppercase text={t('highlight_9_title')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
          <Text text={t('highlight_9_text')} />
        </Column>

        <Column>
          <Subtitle text={t('acceptance_contractual_relationship_title')} as="h3" uppercase />
          <Text text={t('acceptance_contractual_relationship_text')} />
        </Column>

        <Column>
          <Subtitle text={t('privacy_title')} as="h3" uppercase />
          <Text>
            {t('privacy_text_1')}
            {' '}
            <StyledLink text={t('privacy_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('privacy_text_2')}
          </Text>
        </Column>

        <Column>
          <Subtitle text={t('modification_additional_terms_title')} as="h3" uppercase />
          <Text text={t('modification_additional_terms_text_1')} />
          <Text text={t('modification_additional_terms_text_2')} />
          <Text text={t('modification_additional_terms_text_3')} />
          <Text text={t('modification_additional_terms_text_4')} />
          <Text text={t('modification_additional_terms_text_5')} />
        </Column>

        <Column>
          <Subtitle text={t('users_of_services_title')} as="h3" uppercase />
          <Text text={t('users_of_services_text_1')} />
          <Text text={t('users_of_services_text_2')} />
          <Text text={t('users_of_services_text_3')} />
        </Column>

        <Column>
          <Subtitle text={t('use_of_service_title')} as="h3" uppercase />
          <Text text={t('use_of_service_text_1')} />
          <Text text={t('use_of_service_text_2')} />
          <Text text={t('use_of_service_text_3')} />
          <Text text={t('use_of_service_text_4')} />
          <Text text={t('use_of_service_text_5')} />
        </Column>

        <Column>
          <Subtitle text={t('acceptable_use_policy_title')} as="h3" uppercase />
          <Text text={t('acceptable_use_policy_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('subscriptions_payments_cancellations_title')} as="h3" uppercase />
          <Text text={t('subscriptions_payments_cancellations_text_1')} />
          <Text text={t('subscriptions_payments_cancellations_text_2')} />
          <Text text={t('subscriptions_payments_cancellations_text_3')} />
          <Text text={t('subscriptions_payments_cancellations_text_4')} />
          <Text text={t('subscriptions_payments_cancellations_text_5')} />
          <Text>
            {t('subscriptions_payments_cancellations_text_6')}
            {' '}
            <StyledLink text={t('subscriptions_payments_cancellations_link')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('subscriptions_payments_cancellations_text_7')}
            {' '}
            <StyledLink text={t('subscriptions_payments_cancellations_link')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            .
          </Text>

          <Text text={t('subscriptions_payments_cancellations_text_7')} />
        </Column>

        <Column>
          <Subtitle text={t('user_content_title')} as="h3" uppercase />
          <Text text={t('user_content_text_1')} />
          <Text text={t('user_content_text_2')} />
          <Text text={t('user_content_text_3')} />
          <Text>
            {t('user_content_text_4')}
            {' '}
            <StyledLink text={t('user_content_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('user_content_text_5')}

          </Text>
          <Text text={t('user_content_text_5')} />
          <Text text={t('user_content_text_6')} />
          <Text text={t('user_content_text_7')} />
          <Text text={t('user_content_text_8')} />
        </Column>

        <Column>
          <Subtitle text={t('forum_and_messaging_title')} as="h3" uppercase />
          <Text text={t('forum_and_messaging_text_1')} />
          <Text text={t('forum_and_messaging_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('t2s_intellectual_property_ownership_title')} as="h3" uppercase />
          <Text text={t('t2s_intellectual_property_ownership_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('infringement_notifications_title')} as="h3" uppercase />
          <Text>
            {t('infringement_notifications_text_1')}
            {' '}
            <StyledLink text={t('infringement_notifications_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('infringement_notifications_text_2')}
          </Text>
        </Column>

        <Column>
          <Subtitle text={t('term_and_termination_title')} as="h3" uppercase />
          <Text text={t('term_and_termination_text_1')} />
          <Text text={t('term_and_termination_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('links_to_third_party_title')} as="h3" uppercase />
          <Text text={t('links_to_third_party_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('disclaimer_of_warranties_title')} as="h3" uppercase />
          <Text text={t('disclaimer_of_warranties_text_1')} />
          <Text text={t('disclaimer_of_warranties_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('ncsa_regulations_title')} as="h3" uppercase />
          <Text text={t('ncsa_regulations_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('limitation_of_liability_title')} as="h3" uppercase />
          <Text text={t('limitation_of_liability_text_1')} />
          <Text text={t('limitation_of_liability_text_2')} />
          <Text text={t('limitation_of_liability_text_3')} />
          <Text text={t('limitation_of_liability_text_4')} />
        </Column>

        <Column>
          <Subtitle text={t('indemnity_title')} as="h3" uppercase />
          <Text text={t('indemnity_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('interactions_between_users_title')} as="h3" uppercase />
          <Text text={t('interactions_between_users_text_1')} />
          <Text text={t('interactions_between_users_text_2')} />
          <Text text={t('interactions_between_users_text_3')} />
        </Column>

        <Column>
          <Subtitle text={t('local_laws_title')} as="h3" uppercase />
          <Text text={t('local_laws_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('special_provisions_mobile_title')} as="h3" uppercase />
          <Text text={t('special_provisions_mobile_text_1')} />
          <Text>
            {t('special_provisions_mobile_text_2')}
            {' '}
            <StyledLink text={t('special_provisions_mobile_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('special_provisions_mobile_text_3')}
          </Text>
          <Text text={t('special_provisions_mobile_text_3')} />
          <Text text={t('special_provisions_mobile_text_4')} />
          <Text text={t('special_provisions_mobile_text_5')} />
          <Text>
            {t('special_provisions_mobile_text_6')}
            {' '}
            <StyledLink text={t('special_provisions_mobile_link_2')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('special_provisions_mobile_text_7')}
          </Text>
          <Text>
            {t('special_provisions_mobile_text_8')}
            {' '}
            <StyledLink text={t('special_provisions_mobile_link_3')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('special_provisions_mobile_text_9')}
            {' '}
            <StyledLink text={t('special_provisions_mobile_link_4')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
          </Text>
        </Column>

        <Column>
          <Subtitle text={t('dispute_resolution_arbitration_title')} as="h3" uppercase />
          <Text text={t('dispute_resolution_arbitration_text_1')} />
          <Text text={t('dispute_resolution_arbitration_text_2')} />
          <Text text={t('dispute_resolution_arbitration_text_3')} />
          <Text text={t('dispute_resolution_arbitration_text_4')} />
          <Text text={t('dispute_resolution_arbitration_text_5')} />
          <Text text={t('dispute_resolution_arbitration_text_6')} />
        </Column>

        <Column>
          <Subtitle text={t('electronic_communications_title')} as="h3" uppercase />
          <Text text={t('electronic_communications_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('consumer_notice_title')} as="h3" uppercase />
          <Text text={t('consumer_notice_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('general_title')} as="h3" uppercase />
          <Text>
            {t('general_text_1')}
            {' '}
            <StyledLink text={t('general_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {', '}
            <StyledLink text={t('general_link_2')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {', '}
            <StyledLink text={t('general_link_3')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {', '}

            {t('general_text_2')}

          </Text>

        </Column>

        <Column>
          <Subtitle text={t('contact_us_title')} as="h3" uppercase />
          <Text text={t('contact_us_text_1')} />
          <Text text={t('contact_us_text_2')} />
        </Column>

      </Styled.TermsContainer>
    </Styled.TermsWrapper>
  );
}

Terms.propTypes = {
  children: Prop.node,
};
