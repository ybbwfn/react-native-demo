import React, { Component } from 'react';
import {
  View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
  DatePickerAndroid, ToastAndroid
} from 'react-native';
import Title from './Title'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');

const mapStateToProps = (state) => {
  return {
    tab: state.tab
  }
}
function ImageBox(props) {
  return <TouchableNativeFeedback onPress={() => { 
    // props.tab.push(props.path) 
    }}>

    <Image source={props.imgSrc} style={styles.img} />

  </TouchableNativeFeedback>
}
const ImageBoxs = connect(mapStateToProps)(ImageBox)
class BestService extends Component {
  constructor(props) {
    super(props)
  }
  pushRouter = (url) => {
    // console.log(this)
    this.props.navigation.push(url)
  }
  render() {
    return <>
      <Title title="致优服务" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.box}>

        <ImageBoxs  imgSrc={require("../../img/huli.png")} />
        <ImageBoxs  imgSrc={require("../../img/childHuli.png")} />
        <ImageBoxs  imgSrc={require("../../img/houseYuZi.png")} />
        <ImageBoxs  imgSrc={require("../../img/huifu.png")} />
        <ImageBoxs  imgSrc={require("../../img/weiyang.png")} />

      </ScrollView>
    </>
  }
}

export default BestService;

const styles = StyleSheet.create({
  box: {
    height: 160,
  },
  img:{
    width:296/327*160,
    height:160,
    marginRight:10,
  }

})