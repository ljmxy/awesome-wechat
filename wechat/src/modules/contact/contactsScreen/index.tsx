import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useAppSelector} from '@redux/hooks';
import {APP_NAVIGATOR_NAMES} from '@constants/common';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ContactItem from './contactItem';
import {ContactStackParamList} from '../contactTypes';

function ContactsScreen(): JSX.Element {
  const contacts = useAppSelector(state => state.contact.contacts);

  const navigation =
    useNavigation<NativeStackNavigationProp<ContactStackParamList>>();

  const handleContactItemPress = useCallback(
    (id: string) => {
      console.log(`contact id: ${id} press`);
      navigation.navigate(
        APP_NAVIGATOR_NAMES.ContactDetail as never,
        {
          id,
        } as never,
      );
    },
    [navigation],
  );

  return (
    <View>
      {contacts.length > 0 &&
        contacts.map(item => (
          <ContactItem data={item} onPress={handleContactItemPress} />
        ))}
    </View>
  );
}

export default ContactsScreen;
