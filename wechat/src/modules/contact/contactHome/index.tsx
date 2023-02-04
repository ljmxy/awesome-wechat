import React from 'react';
import AppStacks from '@components/appStacks';
import {APP_NAVIGATOR_NAMES} from '@constants/common';
import {StackInterface} from '@interfaces/common';
import {TFunction} from 'i18next';
import ContactsScreen from '../contactsScreen';
import ContactDetailScreen from '../contactDetail';

const createContactStackConfigs = (
  t: TFunction<'translation', undefined, 'translation'>,
) => {
  const stackConfigs: StackInterface[] = [
    {
      name: APP_NAVIGATOR_NAMES.Contacts,
      component: ContactsScreen,
      options: {
        title: t('contact.contacts.title'),
      },
    },
    {
      name: APP_NAVIGATOR_NAMES.ContactDetail,
      component: ContactDetailScreen,
      options: {
        title: t('contact.contactDetail.title'),
      },
    },
  ];
  return stackConfigs;
};

function ContactHome(): JSX.Element {
  return <AppStacks create={createContactStackConfigs} />;
}

export default ContactHome;
