import React, { Component } from 'react'
import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Form from '../component/Form'
import Flex from '../component/Flex'

const SketchRouter = createStackNavigator(
  {
    Form: {
      screen: Form,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    Flex: {
      screen: Flex,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
  },
  
  {
    headerBackTitleVisible: false,
  }
)

export default createAppContainer(SketchRouter)