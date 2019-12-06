import React, { Component } from 'react';
import { Button } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
        <Button
        onPress={() => {
            Alert.alert("你点击了按钮！");
        }}
        title="点我！"
        />
    );
  }
}