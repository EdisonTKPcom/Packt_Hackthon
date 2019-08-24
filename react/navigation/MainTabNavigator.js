import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RawScreen from '../screens/RawScreen';
import ScanQRScreen from '../screens/ScanQRScreen';
import UpdatedScreen from '../screens/UpdatedScreen';
import TicketScreen from '../screens/TicketScreen';
import StartScreen from '../screens/StartScreen';
import ShopScreen from '../screens/ShopScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import InsuranceScreen from '../screens/InsuranceScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Start: StartScreen,
    Home: HomeScreen,
    Insurance: InsuranceScreen,
    Emergency: EmergencyScreen,
    Shop: ShopScreen,
    Raw: RawScreen,
    Ticket: TicketScreen,
    ScanQR: ScanQRScreen,
    Updated: UpdatedScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  Home: { screen: HomeStack, navigationOptions:{tabBarVisible: false} }
});

tabNavigator.path = '';

export default tabNavigator;
