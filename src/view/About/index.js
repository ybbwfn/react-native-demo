import React, { Component } from 'react';
import {Button,View} from 'react-native'
class index extends Component {
  render() {
    return (
      <View>
        <Button onPress={()=>this.props.navigation.navigate('Flex')} title='dianji'></Button>
      </View>
    );
  }
}

export default index;