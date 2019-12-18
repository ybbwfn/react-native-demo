import React, { Component } from 'react';
import {
    View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
    DatePickerAndroid, ToastAndroid
} from 'react-native';
import Title from './Title'
const { width, height } = Dimensions.get('window');
class ServiceProcess extends Component {
    constructor(props) {
      super(props)
    }
    pushRouter = (url) => {
      // console.log(this)
      this.props.navigation.push(url)
    }
    render() {
      return <View >
        <Title title="服务流程" />
        <TouchableNativeFeedback onPress={() => { this.pushRouter('YueSao') }}>
          <View style={{width:width,height:width/1.67+30}}>
            <Image
            resizeMode="contain"
            resizeMethod="resize"
            style={{width:width-20,height:width/1.67}}
             source={require('../../img/progress.png')}/>
          </View>
        </TouchableNativeFeedback>
  
      </View>
    }
  }

export default ServiceProcess;

const styles = StyleSheet.create({

})