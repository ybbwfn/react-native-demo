import React, { Component } from 'react'
import {
  createAppContainer,
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../component/TabBar'
import Form from '../component/Form'
import Flex from '../component/Flex'

const SketchRouter = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    Form: Form,
    Flex: {
      screen: Flex,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
  },
  
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(SketchRouter)