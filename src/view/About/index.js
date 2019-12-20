

import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native'


import Top from './Top'
import Form from './Form'
class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Top />
        <Form />
      </View>
    );
  }
}
export default index;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'flex-start'
  }
})