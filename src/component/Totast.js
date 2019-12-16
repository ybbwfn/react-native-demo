

import React, { Component } from 'react';
import { View, ToastAndroid, Text, Button } from 'react-native';

class ToastAndroidPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      time: 'SHORT',
      position: 'CENTER'
    };
  }

  _onOperate = item => {
    this.setState({
      [item.type]: item.value,
      visible: true
    });
  };

  render() {
    const { visible, position, time } = this.state;
    return (
      <View
        style={{ flexDirection: 'row', justifyContent: 'center', padding: 30 }}
      >
        <Text> ToastAndroid ⤵️</Text>
        <Toast
          style={{ color: 'red' }}
          visible={visible}
          message='A wild toast appeared!'
          position={position}
          time={time}
        />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {OPERATE_LIST.map((item, index) => {
              return (
                <View style={{ margin: 10 }} key={index}>
                  <Button
                    title={item.label}
                    onPress={() => {
                      this.onOperate(item);
                    }}
                    color='#409EFF'
                  />
                </View>
              );
            })}
          </View>
      </View>
    );
  }
}

const OPERATE_LIST = [
  {
    label: 'TOP',
    value: 'TOP',
    type: 'position'
  },
  {
    label: 'BOTTOM',
    value: 'BOTTOM',
    type: 'position'
  },
  {
    label: 'CENTER',
    value: 'CENTER',
    type: 'position'
  },
  {
    label: 'SHORT',
    value: 'SHORT',
    type: 'time'
  },
  {
    label: 'LONG',
    value: 'LONG',
    type: 'time'
  }
];

const Toast = props => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid[props.time],
      ToastAndroid[props.position],
      0,
      0
    );
    return null;
  }
  return null;
};

export default ToastAndroidPackage;