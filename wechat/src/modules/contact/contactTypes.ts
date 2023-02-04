export type ContactItemType = {
  id: string | number;
  name: string;
};

export type ContactStackParamList = {
  Home: {} | never;
  Contacts: {id: string} | undefined;
  ContactDetail: {} | undefined;
};
