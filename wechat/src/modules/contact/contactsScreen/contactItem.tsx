import React, {useCallback, useMemo} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, ListItem} from '@rneui/themed';
import lodash from 'lodash';
import fp from 'lodash/fp';
import {ContactItemType} from '../contactTypes';

type ContactItemPropTypes = PropsWithChildren<{
  onPress?: (id: string, data: ContactItemType) => void;
  data: ContactItemType;
}>;

function ContactItem(props: ContactItemPropTypes): JSX.Element {
  const {
    onPress,
    data,
    data: {name, id},
  } = props;

  const avatarTitle = useMemo(() => {
    let title;
    if (lodash.isString(name)) {
      title = fp.pipe(fp.get(0), lodash.toUpper)(name);
    } else {
      title = '';
    }
    return title;
  }, [name]);

  const handleItemPress = useCallback(() => {
    if (lodash.isFunction(onPress)) {
      onPress(id, data);
    }
  }, [id, data, onPress]);

  return (
    <View>
      <ListItem onPress={handleItemPress}>
        <Avatar rounded title={avatarTitle} containerStyle={styles.avatar} />
        <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#ccc',
  },
});

export default ContactItem;
