import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../register/signIn';
import Loading from '../loading';

function Home(): JSX.Element {
  // const { t } = useTranslation();

  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName="loading">
      <HomeStack.Screen name="signin" component={SignIn} />
      <HomeStack.Screen name="loading" component={Loading} />
    </HomeStack.Navigator>
  );
}

export default Home;
