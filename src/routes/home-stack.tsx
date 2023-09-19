import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseScreen from '../screens/excercise/excercise.container';
import ConclusionScreen from '../screens/conclusion/conclusion.container';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{headerShown: false}}
            initialRouteName='home'>
            <Stack.Screen name="home" component={ExerciseScreen} />
            <Stack.Screen name="conclusion" component={ConclusionScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
