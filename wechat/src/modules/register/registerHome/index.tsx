import React from 'react';
import AppStacks from '@components/appStacks';
import {APP_NAVIGATOR_NAMES} from '@constants/common';
import {StackInterface} from '@interfaces/common';
import {TFunction} from 'i18next';
import SignInScreen from '../signInScreen';
import SignOutScreen from '../signOutScreen';
import SignUpScreen from '../signUpScreen';

const createRegisterStackConfigs = (
  t: TFunction<'translation', undefined, 'translation'>,
) => {
  const stackConfigs: StackInterface[] = [
    {
      name: APP_NAVIGATOR_NAMES.SignIn,
      component: SignInScreen,
      options: {
        title: t('register.signIn.title'),
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

function RegisterHome(): JSX.Element {
  return <AppStacks create={createRegisterStackConfigs} />;
}

export default RegisterHome;
