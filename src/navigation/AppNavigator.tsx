import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const AppStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStackNavigator.Navigator>
        <AppStackNavigator.Screen name={'Home'} component={Home}/>
        <AppStackNavigator.Screen name={'Detail'} component={Detail}/>
    </AppStackNavigator.Navigator>
  )
}

export default AppNavigator