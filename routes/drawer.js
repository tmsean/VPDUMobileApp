import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import AboutStack from './aboutStack';
import FlightStack from './flightStack';
import ShiftStack from './shiftStack';
import FlightDetailsStack from './flightDetailsStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  About: {
    screen: AboutStack,
  },
  Flight: {
    screen: FlightStack,
  },
  Shift: {
    screen: ShiftStack,
  },
  FlightDetails: {
    screen: FlightDetailsStack,
  }
});

export default createAppContainer(RootDrawerNavigator);