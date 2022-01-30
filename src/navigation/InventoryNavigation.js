import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Inventory from '../screens/inventory/Inventory';
import AddItem from '../screens/inventory/AddItem';

const InventoryStack = createStackNavigator();

export const InventoryNavigator = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'AddItem') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);
  return (
    <InventoryStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <InventoryStack.Screen name="Inventory" component={Inventory} />
      <InventoryStack.Screen
        name="AddItem"
        component={AddItem}
        options={{
          presentation: 'modal',
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </InventoryStack.Navigator>
  );
};
