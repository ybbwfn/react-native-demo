import React, { Component } from 'react';
import {
  View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
  DatePickerAndroid, ToastAndroid,ImageBackground
} from 'react-native';
import Title from './Title'

const { width, height } = Dimensions.get('window');

import ImgBtns from './ImgBtns'

class Service extends Component {
  constructor(props) {
    super(props)
  }
  pushRouter = (url) => {
    // console.log(this)
    this.props.navigation.push(url)
  }
  render() {
    return <>
      <Title title="服务保障" />
      <View style={styles.box}>
      <ImgBtns path="YueSao" imgSrc={require("../../img/yange.png")}/>
      <ImgBtns path="" imgSrc={require("../../img/fuwu.png")}/>
      <ImgBtns path="" imgSrc={require("../../img/baoxian.png")}/>
      <ImgBtns path="" imgSrc={require("../../img/genghuan.png")}/>

    </View>
    </>
  }
}

export default Service;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  serviceBtn: {
    backgroundColor: 'pink',
    width: width / 2 - 20,
    height: (width / 2 - 20) / 2,
    marginBottom: 10,
  },
})