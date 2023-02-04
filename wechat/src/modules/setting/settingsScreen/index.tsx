import React from 'react';
import {Avatar, ListItem, Text} from '@rneui/themed';
import {View} from 'react-native';

function SettingsScreen(): JSX.Element {
  return (
    <View>
      <ListItem>
        <Avatar
          rounded
          source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
        />
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem topDivider>
        <Avatar
          rounded
          source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
        />
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem topDivider>
        <Avatar
          rounded
          source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
        />
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

export default SettingsScreen;
