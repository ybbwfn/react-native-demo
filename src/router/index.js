import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import main from './TabBar'
import Form from '../component/Form'
import Flex from '../component/Flex'
import YueSao from '../view/YueSao'
import YuEr from '../view/YuEr'

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
  main: {
    screen: main,
    path: 'main',
    navigationOptions: ({ navigation }) => ({
      // title:'111',
      // headerBackTitleVisible:false,
      // mode  :'none',
      header:null
    }),
  }
}

const SketchRouter = createStackNavigator(stackRouterMap,{
  initialRouteName: 'main',
  // headerMode: 'none'
})



export default createAppContainer(SketchRouter)