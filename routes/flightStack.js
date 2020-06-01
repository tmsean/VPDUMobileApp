import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Flight from '../screens/flight';
import FlightDetails from '../screens/flightDetails';

const screens = {
  Flight: {
    screen: Flight,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='VPDU' navigation={navigation} />
      }
    },
  },
  FlightDetails: {
    screen: FlightDetails,
    navigationOptions: {
      title: 'Flight Details',
    }
  },
}

const FlightStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default FlightStack;