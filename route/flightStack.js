import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/HomeScreen';
import ReviewDetails from '../screens/reviewDetails';
import HomeScreen from '../screens/HomeScreen';

const screens = {
  Flight: {
    screen: FlightScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='VPDU' navigation={navigation} />
      }
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;