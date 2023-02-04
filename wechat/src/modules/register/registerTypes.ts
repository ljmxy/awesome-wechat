export type RegisterStackParamList = {
  Home: {} | never;
  SignIn: {} | undefined;
  SignUp: {} | undefined;
  SignOut: {} | undefined;
};

export type SignInDataType = {
  username: string | undefined;
  password: string | undefined;
};

export type AfterSignInDataType = {
  username: string | undefined;
};
