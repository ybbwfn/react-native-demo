import React, { Component } from 'react'
import {
  createAppContainer,
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import TabBar from './TabBar'
import Form from '../component/Form'
import Flex from '../component/Flex'
import YueSao from '../view/HouseKeep/YueSao'
import YuEr from '../view/HouseKeep/YuEr'

const stackRouterMap = {
  Form: {
    screen: Form,
    path: 'Form',
    navigationOptions: {
      headerTitle: '这是Form',
      headerTitleStyle:{
      }
    },
  },
  Flex: Flex,
  YueSao:YueSao,
  YuEr:YuEr,
  main: TabBar
}

const SketchRouter = createStackNavigator(stackRouterMap,{
  initialRouteName: 'main',
  headerMode: 'none'
})

export default createAppContainer(SketchRouter)