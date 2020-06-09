import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Shift from '../screens/shift';
import ShiftDetails from '../screens/shiftDetails';
import ShiftSupply from '../screens/shiftSupply';
import ShiftSupplyForm from '../screens/shiftSupplyForm';

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
    navigationOptions: ({ navigation }) => {
      return {title: 'Shift Details'}
    }
  },
  ShiftSupply: {
    screen: ShiftSupply,
    navigationOptions: ({ navigation }) => {
      return {title: 'Shift Supplies'}
    }
  }
}

const ShiftStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default ShiftStack;