import React from 'react';
import AppStacks from '@components/appStacks';
import {APP_NAVIGATOR_NAMES} from '@constants/common';
import {StackInterface} from '@interfaces/common';
import {TFunction} from 'i18next';
import ConversationsScreen from '../conversationsScreen';
import ConversationDetailScreen from '../conversationDetailScreen';

const createConversationStackConfigs = (
  t: TFunction<'translation', undefined, 'translation'>,
) => {
  const stackConfigs: StackInterface[] = [
    {
      name: APP_NAVIGATOR_NAMES.Conversations,
      component: ConversationsScreen,
      options: {
        title: t('conversation.conversations.title'),
      },
    },
    {
      name: APP_NAVIGATOR_NAMES.ConversationDetail,
      component: ConversationDetailScreen,
      options: {
        title: t('conversation.conversationDetail.title'),
      },
    },
  ];
  return stackConfigs;
};

function ConversationHome(): JSX.Element {
  return <AppStacks create={createConversationStackConfigs} />;
}

export default ConversationHome;
