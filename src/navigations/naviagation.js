

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CategoryScreen, HomeScreen, ProfileScreen, WelcomeScreen, screens} from '../screens';
import MybottomTabs from './bottomnavigation';
import * as Screens from '../screens/index';

const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  return (
    <> 
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
          orientation: 'portrait',
        }}>

        <Stack.Screen name="WelcomeScreen" component={Screens.WelcomeScreen} />
          <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
          <Stack.Screen
            name="Home"
            component={Screens.HomeScreen}
        
          /> 
          <Stack.Screen
            name="Profile"
            component={Screens.ProfileScreen}
          />  
         <Stack.Screen
        name="Category"
        component={Screens.CategoryScreen}
      />
      </Stack.Navigator>
    </>
  );
}