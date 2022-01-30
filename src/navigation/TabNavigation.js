import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Inventory from '../screens/inventory/Inventory';
import {COLORS} from '../constants/theme';

const TabNavigator = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName="Inventory"
      screenOptions={{
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.gray,
        headerShown: false,
      }}>
      <TabNavigator.Screen
        name="Home"
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
        name="Listings"
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
        name="Inventory"
        component={Inventory}
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
        name="Explore"
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
        name="Menu"
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
