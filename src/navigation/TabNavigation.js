import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from '../constants/theme';
import {InventoryNavigator} from './InventoryNavigation';
import DummyScreen from '../screens/DummyScreen';

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
        component={DummyScreen}
        options={() => ({
          title: 'Home',
          tabBarLabelStyle: styles.tab,
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
        component={DummyScreen}
        options={() => ({
          title: 'Listings',
          tabBarLabelStyle: styles.tab,
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
          tabBarLabelStyle: styles.tab,
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
        component={DummyScreen}
        options={() => ({
          title: 'Explore',
          tabBarLabelStyle: styles.tab,
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
        component={DummyScreen}
        options={() => ({
          title: 'Menu',
          tabBarLabelStyle: styles.tab,
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

const styles = StyleSheet.create({
  tab: {
    ...FONTS.body_14,
    fontSize: 12,
  },
});
