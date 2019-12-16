import React, { Component } from 'react'
import {
  createAppContainer,
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import YueSao from './YueSao.js'
import YuEr from './YuEr.js'

const SketchRouter = createStackNavigator(
  {
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
  },
  
  {
    headerBackTitleVisible: false,
  }
)

export default createAppContainer(SketchRouter)