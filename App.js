import React from "react";
import { StyleSheet, View, Button, Alert, Text, Header } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabOne from './Screens/TabOne';
import TabTwo from './Screens/TabTwo';
import TabThree from './Screens/TabThree';

const TabNavigator = createBottomTabNavigator({
        TabOne: { screen: TabOne },
        TabTwo: { screen: TabTwo },
        TabThree: { screen: TabThree}
   },
   {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'TabOne') {
          iconName = `ios-contact`;
        } else if (routeName === 'TabTwo') {
          iconName = `ios-people`;
        } else if (routeName === 'TabThree') {
          iconName = `ios-planet`;
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#6190ff',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: 'black',
        borderTopWidth: 2,
        borderTopColor:"white",
        PaddingTop:5,
        height:70
      },
      tabStyle: {
        paddingBottom:10,
        paddingTop:10
      },
      labelStyle: {
        paddingTop:0,
        marginTop:0
      },
    },
});

export default createAppContainer(TabNavigator);
