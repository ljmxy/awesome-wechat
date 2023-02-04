import React, {useCallback, useMemo} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Badge, ListItem, Text} from '@rneui/themed';
import dayjs from 'dayjs';
import lodash from 'lodash';
import fp from 'lodash/fp';
import {ConversationItemType} from '../conversationTypes';

type ConversationItemPropTypes = PropsWithChildren<{
  onPress?: (id: string, data: ConversationItemType) => void;
  data: ConversationItemType;
}>;

function ConversationItem(props: ConversationItemPropTypes): JSX.Element {
  const {
    onPress,
    data,
    data: {
      newMessagesCount,
      fromUsername,
      latestMessageContent,
      receivedTime,
      id,
    },
  } = props;

  const avatarTitle = useMemo(() => {
    let title;
    if (lodash.isString(fromUsername)) {
      title = fp.pipe(fp.get(0), lodash.toUpper)(fromUsername);
    } else {
      title = '';
    }
    return title;
  }, [fromUsername]);

  const handleItemPress = useCallback(() => {
    if (lodash.isFunction(onPress)) {
      onPress(id, data);
    }
  }, [id, data, onPress]);

  return (
    <View>
      <ListItem onPress={handleItemPress}>
        <Avatar rounded title={avatarTitle} containerStyle={styles.avatar} />
        <ListItem.Content style={styles.leftContent}>
          <ListItem.Title>{fromUsername}</ListItem.Title>
          <Text numberOfLines={1} style={styles.latestMessageContent}>
            {latestMessageContent}
          </Text>
        </ListItem.Content>
        <ListItem.Content style={styles.rightContent}>
          <ListItem.Subtitle>
            {dayjs(receivedTime).format('DD MMM')}
          </ListItem.Subtitle>
          {newMessagesCount > 0 && (
            <Badge value={newMessagesCount} status="error" />
          )}
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#ccc',
  },
  leftContent: {
    flex: 4,
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  latestMessageContent: {
    color: '#71717A',
  },
});

export default ConversationItem;
