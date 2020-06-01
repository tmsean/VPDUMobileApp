import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Flight from '../screens/flight';

const screens = {
  Shift: {
    screen: Flight,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='VPDU' navigation={navigation} />
      }
    },
  },
}

const ShiftStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default ShiftStack;