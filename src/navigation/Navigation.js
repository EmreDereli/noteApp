
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddNote from "../../src/screens/AddNote";
import HomeScreen from "../screens/HomeScreen";
const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({}) => ({
        header: null,
      }),
    },
    AddNote: {
      screen: AddNote,
      navigationOptions: ({}) => ({
        header: null,
      }),
    },



},
  {
    initialRouteName: 'HomeScreen',
  }
);

export const AppContainer = createAppContainer(AppNavigator);