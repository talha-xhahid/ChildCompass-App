import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChildInfo from '../components/Screens/ChildInfo';
import ChildCode from '../components/Screens/ChildInfo';
import EmailVerification from '../components/Screens/EmailVerification';
import ParentLogin from '../components/Screens/ParentLogin';
import ParentSignup from '../components/Screens/ParentSignup';
import RoleScreen from '../components/Screens/RoleScreen'

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RoleScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RoleScreen" component={RoleScreen} />
        <Stack.Screen name="ChildInfo" component={ChildInfo} />
        <Stack.Screen name="ParentSignup" component={ParentSignup} />
        <Stack.Screen name="ParentLogin" component={ParentLogin} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} />
        <Stack.Screen name="ChildCode" component={ChildCode} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen
