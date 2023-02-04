import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAppSelector} from '@redux/hooks';
import {useTranslation} from 'react-i18next';
import {APP_NAVIGATOR_NAMES} from '@constants/common';
import RegisterHome from '@modules/register/registerHome';
import ConversationHome from '@modules/conversation/conversationHome';
import ContactHome from '@modules/contact/contactHome';
import SettingHome from '@modules/setting/settingHome';

const Tab = createBottomTabNavigator();

function HomeTabs(): JSX.Element {
  const isSignedIn = useAppSelector(state => state.register.isSignIn);

  const initialRouteName = isSignedIn
    ? APP_NAVIGATOR_NAMES.ConversationDetail
    : APP_NAVIGATOR_NAMES.RegisterHome;

  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={APP_NAVIGATOR_NAMES.ConversationHome}
        component={ConversationHome}
        options={{
          title: t('conversation.tabTitle'),
        }}
      />
      <Tab.Screen
        name={APP_NAVIGATOR_NAMES.ContactHome}
        component={ContactHome}
        options={{
          title: t('contact.tabTitle'),
        }}
      />
      {isSignedIn ? (
        <Tab.Screen
          name={APP_NAVIGATOR_NAMES.SettingHome}
          component={SettingHome}
          options={{
            title: t('setting.tabTitle'),
          }}
        />
      ) : (
        <Tab.Screen
          name={APP_NAVIGATOR_NAMES.RegisterHome}
          component={RegisterHome}
          options={{
            title: t('register.tabTitle'),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default HomeTabs;
