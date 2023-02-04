import React, {useCallback} from 'react';
import {useAppSelector} from '@redux/hooks';
import {View} from 'react-native';
import ConversationItem from './conversationItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ConversationStackParamList} from '../conversationTypes';
import {APP_NAVIGATOR_NAMES} from '@constants/common';

function ConversationsScreen(): JSX.Element {
  const conversations = useAppSelector(
    state => state.conversation.conversations,
  );

  const navigation =
    useNavigation<NativeStackNavigationProp<ConversationStackParamList>>();

  const handleConversationItemPress = useCallback(
    (id: string) => {
      console.log(`conversation id: ${id} press`);
      navigation.navigate(
        APP_NAVIGATOR_NAMES.ConversationDetail as never,
        {
          id,
        } as never,
      );
    },
    [navigation],
  );

  return (
    <View>
      {conversations.length > 0 &&
        conversations.map(item => (
          <ConversationItem data={item} onPress={handleConversationItemPress} />
        ))}
    </View>
  );
}

export default ConversationsScreen;
