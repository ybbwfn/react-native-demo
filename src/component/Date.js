

import React, { Component } from 'react';
import { View, DatePickerAndroid, Text,Button } from 'react-native';

class DatePickerAndroidPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDatePicker = async (options = {mode:'calendar'}) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(
        Object.assign(
          {
            date: new Date()
          },
          options
        )
      );
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ year, month, day });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  onOperate = () => {
    this.onDatePicker();
  };

  render() {
    return (

                <Button
                    title="aaa"
                    onPress={() => {
                    this.onOperate( );
                    }}
                    color='#409EFF'
                />

    );
  }
}


export default DatePickerAndroidPackage;