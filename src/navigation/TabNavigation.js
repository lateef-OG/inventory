import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants/theme';
import {InventoryNavigator} from './InventoryNavigation';

const TabNavigator = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName="InventoryStack"
      screenOptions={{
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.gray,
        headerShown: false,
      }}>
      <TabNavigator.Screen
        name="HomeStack"
        component={() => <Text>Home</Text>}
        options={() => ({
          title: 'Home',
          tabBarLabelStyle: style.tab,
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="home"
              size={20}
              color={focused ? COLORS.blue : COLORS.gray}
            />
          ),
        })}
      />
      <TabNavigator.Screen
        name="ListingsStack"
        component={() => <Text>Listings</Text>}
        options={() => ({
          title: 'Listings',
          tabBarLabelStyle: style.tab,
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="umbrella"
              size={20}
              color={focused ? COLORS.blue : COLORS.gray}
            />
          ),
        })}
      />
      <TabNavigator.Screen
        name="InventoryStack"
        component={InventoryNavigator}
        options={() => ({
          title: 'Inventory',
          tabBarLabelStyle: style.tab,
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="folder"
              size={20}
              color={focused ? COLORS.blue : COLORS.gray}
            />
          ),
        })}
      />
      <TabNavigator.Screen
        name="ExploreStack"
        component={() => <Text>Explore</Text>}
        options={() => ({
          title: 'Explore',
          tabBarLabelStyle: style.tab,
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="search"
              size={20}
              color={focused ? COLORS.blue : COLORS.gray}
            />
          ),
        })}
      />
      <TabNavigator.Screen
        name="MenuStack"
        component={() => <Text>Menu</Text>}
        options={() => ({
          title: 'Menu',
          tabBarLabelStyle: style.tab,
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="bars"
              size={20}
              color={focused ? COLORS.blue : COLORS.gray}
            />
          ),
        })}
      />
    </TabNavigator.Navigator>
  );
};

export default TabNavigation;

const style = StyleSheet.create({
  tab: {
    fontSize: 12,
  },
});
