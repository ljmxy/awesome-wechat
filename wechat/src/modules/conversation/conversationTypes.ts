export type ConversationItemType = {
  id: string | number;
  newMessagesCount: number;
  fromUsername: string;
  latestMessageContent: string;
  receivedTime: number | string | Date;
};

export type ConversationStackParamList = {
  Home: {} | never;
  Conversations: {id: string} | undefined;
  ConversationDetail: {} | undefined;
};
