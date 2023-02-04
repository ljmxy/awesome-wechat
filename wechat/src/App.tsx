import React from 'react';
import {ThemeProvider} from '@rneui/themed';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import theme from '@theme/theme';
import EntryHome from '@modules/entry/entryHome';
import store from '@redux/store';
import i18n from './i18n';

i18n.init();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = false;

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <EntryHome />
        </ReduxProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
