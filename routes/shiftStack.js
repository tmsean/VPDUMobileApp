import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Shift from '../screens/shift';
import ShiftDetails from '../screens/shiftDetails';

const screens = {
  Shift: {
    screen: Shift,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='VPDU' navigation={navigation} />
      }
    },
  },
  ShiftDetails: {
    screen: ShiftDetails,
    navigationOptions: {
      title: 'Shift Details',
    }
  },
}

const ShiftStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default ShiftStack;