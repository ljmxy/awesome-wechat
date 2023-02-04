import React from 'react';
import AppStacks from '@components/appStacks';
import {APP_NAVIGATOR_NAMES} from '@constants/common';
import {StackInterface} from '@interfaces/common';
import {TFunction} from 'i18next';
import SettingsScreen from '../settingsScreen';

const createSettingStackConfigs = (
  t: TFunction<'translation', undefined, 'translation'>,
) => {
  const stackConfigs: StackInterface[] = [
    {
      name: APP_NAVIGATOR_NAMES.Settings,
      component: SettingsScreen,
      options: {
        title: t('setting.settings.title'),
      },
    },
  ];
  return stackConfigs;
};

function SettingHome(): JSX.Element {
  return <AppStacks create={createSettingStackConfigs} />;
}

export default SettingHome;
