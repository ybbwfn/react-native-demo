import React, { Component } from 'react';
import {
    View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
    DatePickerAndroid, ToastAndroid
} from 'react-native';
import Title from './Title'
const { width, height } = Dimensions.get('window');
class MianShi extends Component {
    constructor(props) {
      super(props)
    }
    pushRouter = (url) => {
      // console.log(this)
      this.props.navigation.push(url)
    }
    render() {
      return <View style={styles.MianShi}>
        <TouchableNativeFeedback onPress={() => { this.pushRouter('YueSao') }}>
          <View style={[styles.headImg, styles.borderRight]}>
            <Image
  
  
              style={styles.img}
              source={
                require('../../img/11.png')
              }
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => { this.pushRouter('YuEr') }}>
          <View style={styles.headImg}>
            <Image
  
  
              style={styles.img}
              source={
                require('../../img/22.png')
              }
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    }
  }

export default MianShi;

const styles = StyleSheet.create({
    MianShi: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
      },
      headImg: {
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        flex: 1,
        overflow: 'hidden'
      },
      img: {
        width:width/2-10,
        height:(width/2-10)/1.53
      },
      borderRight: {
        borderRightWidth: 1
      },
})