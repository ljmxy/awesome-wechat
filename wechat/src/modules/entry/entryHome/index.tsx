import React, {useCallback} from 'react';
import {APP_NAVIGATOR_NAMES} from '@src/constants/common';
import {TFunction} from 'i18next';
import {StackInterface} from '@interfaces/common';
import AppStacks from '@components/appStacks';
import HomeTabs from '@modules/entry/entryHome/homeTabs';
import SignUpScreen from '@modules/register/signUpScreen';
import SignOutScreen from '@modules/register/signOutScreen';

const createHomeStack = (
  t: TFunction<'translation', undefined, 'translation'>,
) => {
  const stackConfigs: StackInterface[] = [
    {
      name: APP_NAVIGATOR_NAMES.Home,
      component: HomeTabs,
      options: {
        title: t('base.appTitle'),
        headerShown: false,
      },
    },
    {
      name: APP_NAVIGATOR_NAMES.SignUp,
      component: SignUpScreen,
      options: {
        title: t('register.signUp.title'),
      },
    },
    {
      name: APP_NAVIGATOR_NAMES.SignOut,
      component: SignOutScreen,
      options: {
        title: t('register.signOut.title'),
      },
    },
  ];
  return stackConfigs;
};

function EntryHome(): JSX.Element {
  const createStack = useCallback(createHomeStack, []);

  return <AppStacks create={createStack} />;
}

export default EntryHome;
