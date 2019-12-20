

import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native'

import Kong from '../../component/Kong'
import Top from './Top'
import Form from './Form'
class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Top />
        <Kong height={20}/>
        <Form />
      </View>
    );
  }
}
export default index;
const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
    alignItems:'flex-start',
    justifyContent:'flex-start',
  }
})