import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import FlightStack from './FlightStack'

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Flight: {
    screen: FlightStack,
  },
  Shift: {
    screen: ShiftStack,
  },
});

export default createAppContainer(RootDrawerNavigator);