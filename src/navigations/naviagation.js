

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
          animation: 'slide_from_right',
          headerShown: false,
          orientation: 'portrait',
        }}>

          <Stack.Screen name="ContractorScreen" component={Screens.ContractorScreen} />
          <Stack.Screen name="ContractScreen" component={Screens.ContractScreen} />
          <Stack.Screen name="ReviewScreen" component={Screens.ReviewScreen} />
          <Stack.Screen name="Servicedetails" component={Screens.Servicedetails} />
          <Stack.Screen name="ContractorProfile" component={Screens.ContractorProfile} />
          <Stack.Screen name="ServicesLocation" component={Screens.ServicesLocation} />
          <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
          <Stack.Screen name="DetailScreen" component={Screens.DetailScreen} />
        <Stack.Screen name="WelcomeScreen" component={Screens.WelcomeScreen} />
        <Stack.Screen name="SignUpScreen" component={Screens.SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
        <Stack.Screen name="GetStartedScreen" component={Screens.GetStartedScreen} />
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