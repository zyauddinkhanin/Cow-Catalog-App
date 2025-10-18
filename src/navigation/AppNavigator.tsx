import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CowListScreen from '../screens/CowListScreen';
import CowDetailScreen from '../screens/CowDetailScreen';
import CowFormScreen from '../screens/CowFormScreen';
import { Labels, Screens } from '../utils/constants';

export type RootStackParamList = {
  CowList: undefined;
  CowDetail: { cowId: string };
  CowForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName={Screens.CowList}>
    <Stack.Screen
      name={Screens.CowList}
      component={CowListScreen}
      options={{ title: Labels.Cows }}
    />
    <Stack.Screen
      name={Screens.CowDetail}
      component={CowDetailScreen}
      options={{ title: Labels.CowDetails }}
    />
    <Stack.Screen
      name={Screens.CowForm}
      component={CowFormScreen}
      options={{ title: Labels.AddCow }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
