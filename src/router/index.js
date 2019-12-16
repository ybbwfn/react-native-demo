import React, { Component } from 'react'
import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../component/TabBar'
import Form from '../component/Form'
import Flex from '../component/Flex'
import YueSao from '../view/Home/YueSao.js'
import YuEr from '../view/Home/YuEr.js'

const SketchRouter = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    YueSao: {
      screen: YueSao,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    YuEr: {
      screen: YuEr,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
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