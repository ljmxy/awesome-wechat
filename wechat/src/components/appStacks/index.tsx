import React, {useMemo} from 'react';
import type {PropsWithChildren} from 'react';
import {useTranslation} from 'react-i18next';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import lodash from 'lodash';
import {TFunction} from 'i18next';
import {StackInterface} from '@interfaces/common';

type AppStackPropsType = PropsWithChildren<{
  initialRouteName?: string;
  screenOption?: NativeStackNavigationOptions | undefined;
  create: (
    t: TFunction<'translation', undefined, 'translation'>,
  ) => StackInterface[];
}>;

const Stack = createNativeStackNavigator<{[propName: string]: any}>();

function AppStacks(props: AppStackPropsType): JSX.Element {
  const {create, initialRouteName, screenOption} = props;
  const {t} = useTranslation();
  const appStackConfigs = useMemo(() => create(t), [create, t]);
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenOption}>
      {lodash.map(appStackConfigs, (config: StackInterface) => {
        const name = lodash.get(config, ['name']);
        const component = lodash.get(config, ['component']);
        const options = lodash.get(config, ['options']);
        return (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default AppStacks;
