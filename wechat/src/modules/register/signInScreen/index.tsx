import React, {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon, Input} from '@rneui/themed';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {APP_NAVIGATOR_NAMES} from '@constants/common';
import {RegisterStackParamList, SignInDataType} from '../registerTypes';
import {useAppDispatch} from '@redux/hooks';
import {afterSignIn, signIn} from '../registerActions';

function SignInScreen(): JSX.Element {
  const {t} = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RegisterStackParamList>>();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [usernameError, setUsernameError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();

  const usernamePlaceholder = t('register.signIn.usernamePlaceholder');
  const passwordPlaceholder = t('register.signIn.passwordPlaceholder');
  const signInButtonText = t('register.signIn.signInButton');

  const dispatch = useAppDispatch();
  const handleButtonPress = useCallback(() => {
    console.log('sign in button pressed');
    if (!username) {
      const invalidUsernameMessage = t('register.signIn.invalidUsernameError');
      setUsernameError(invalidUsernameMessage);
      return;
    }

    if (!password) {
      const invalidPasswordMessage = t('register.signIn.invalidPasswordError');
      setPasswordError(invalidPasswordMessage);
      return;
    }

    const payload: SignInDataType = {
      username,
      password,
    };
    dispatch(signIn(payload))
      .then(() => dispatch(afterSignIn(username)))
      .then(() =>
        navigation.replace(APP_NAVIGATOR_NAMES.Home as never, {} as never),
      )
      .catch(() => {
        throw new Error('sign in errors');
      });
  }, [username, password, dispatch, t, navigation]);

  const handleUsernameChange = useCallback(
    (value: string) => {
      if (usernameError) {
        setUsernameError(undefined);
      }
      setUsername(value);
    },
    [usernameError],
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      if (passwordError) {
        setPasswordError(undefined);
      }
      setPassword(value);
    },
    [passwordError],
  );

  return (
    <View style={styles.container}>
      <Input
        placeholder={usernamePlaceholder}
        leftIcon={<Icon type="antdesign" name="user" />}
        onChangeText={handleUsernameChange}
        errorMessage={usernameError}
      />
      <Input
        placeholder={passwordPlaceholder}
        leftIcon={<Icon type="antdesign" name="lock" />}
        onChangeText={handlePasswordChange}
        errorMessage={passwordError}
      />
      <Button
        title={signInButtonText}
        containerStyle={styles.btn}
        onPress={handleButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    width: '65%',
    alignSelf: 'center',
  },
  btn: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export default SignInScreen;
