import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export interface StackInterface {
  name: string;
  component: () => JSX.Element;
  options: NativeStackNavigationOptions;
}
