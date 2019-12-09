import React, { Component } from 'react';
import { View ,Button} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
export default class FlexDimensionsBasics extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    console.log(createBottomTabNavigator)
  }
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Button onPress={()=>this.props.navigation.navigate('Form')} title='dianji'></Button>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}