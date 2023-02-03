import React from 'react';
import { ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import i18n from './i18n';
import theme from './theme/theme';
import Home from './modules/entry/home';

i18n.init();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = false;

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Home />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
