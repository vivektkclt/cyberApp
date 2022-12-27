import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import {Login, Splash, Home, Profile} from '../screens';
import AppWrapper from '../components/AppWrapper';
import CustomDrawer from './CustomDrawer/CustomDrawer';
const customAnimation = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
function onBoardingStack() {
  return (
    <AppWrapper>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...customAnimation,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </AppWrapper>
  );
}

function HomeStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        ...customAnimation,
      }}
      drawerContent={props => {
        return <CustomDrawer {...props} />;
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}
export default onBoardingStack;
