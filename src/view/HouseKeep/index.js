import React, { Component } from 'react';
import {
  View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
  DatePickerAndroid, ToastAndroid
} from 'react-native';
import FormItem from '../../component/Form/index.js'
import Picker from 'react-native-picker';
// import Router from './router'
const { width, height } = Dimensions.get('window');

class MianShi extends Component {
  constructor(props){
    super(props)
  }
  pushRouter= (url)=>{
    // console.log(this)
    // this.props.navigation.navigate(url)
  }
  render() {
    return <View style={styles.MianShi}>
      <TouchableNativeFeedback onPress={()=>{this.pushRouter('YueSao')}}>
        <Image
          style={styles.headImg}
          source={
            require('../../img/11.png')
          }
        />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('YuEr')}>
        <Image
          style={styles.headImg}
          source={
            require('../../img/22.png')
          }
        />
      </TouchableNativeFeedback>
    </View>
  }
}
class Over extends Component {
  constructor(props) {
    super(props)
  }
  closePicker = () => {
    if (this.props.overPress) {
      this.props.closePicker()
    }
  }
  render() {
    return this.props.showPicker ?
      <TouchableNativeFeedback
        onPress={this.closePicker}
      >
        <View style={styles.over}></View>
      </TouchableNativeFeedback>
      : null;
  }
}
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: null,
      ceshi: '全部',
      showPicker: false,
      activeLabel: '',
      year: '2019',
      month: '09',
      day: '01',
      pickerData: [26, 42, 60],
      selectedValue: [],
    }
  }
  componentDidMount() {
        // console.dir(this)

  }
  // onDatePicker = async (options = {mode:'calendar'}) => {
  //   try {
  //     const { action, year, month, day } = await DatePickerAndroid.open(
  //       Object.assign(
  //         {
  //           date: new Date()
  //         },
  //         options
  //       )
  //     );
  //     // if (action !== DatePickerAndroid.dismissedAction) {
  //     //   this.setState({ year, month, day });
  //     // }
  //   } catch ({ code, message }) {
  //     console.warn('Cannot open date picker', message);
  //   }
  // };

  getValue = (text) => {
    let pickerData = [];
    if (text == '服务城市') {
      ToastAndroid.showWithGravityAndOffset(
        "A pikachu appeared nearby !",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        0,
        0
      );
      // ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
      return
    } else if (text == '预产期') {
      return
      // this.onDatePicker();
      // return
    } else if (text == '服务天数') {
      pickerData = ['全部', 26, 42, 60];
    } else if (text == '薪资范围') {
      pickerData = ['全部', '5001-7000元26/天', '7001-10000元26/天', '10001-15000元26/天', '15000元26/天以上', '面议'];
    } else if (text == '工作年限') {
      pickerData = ['全部', '1年以下', '1-2年', '3-5年', '6-9年', '10年以上'];
    } else if (text == '籍贯') {
      pickerData = [
        ['河北', '河南', '山东', '山西'],
        ['通州', '朝阳']
      ];
    }

    this.setState({
      showPicker: true,
      activeLabel: text,
      pickerData: pickerData,
    }, () => {
      this.showPicekr()
    })

  }
  closePicker = () => {
    this.setState({ showPicker: false })
    Picker.hide()
  }
  showPicekr = () => {

    Picker.init({
      pickerBg: [255, 255, 255, 1],
      pickerCancelBtnColor: [255, 165, 0, 1],
      pickerConfirmBtnColor: [255, 165, 0, 1],
      pickerTitleText: this.state.activeLabel,
      pickerCancelBtnText: '取消',
      pickerConfirmBtnText: '确定',
      pickerData: this.state.pickerData,
      selectedValue: this.state.selectedValue,
      onPickerConfirm: data => {
        console.log(data)
        this.setState({ showPicker: false })
      },
      onPickerCancel: data => {
        this.setState({ showPicker: false })
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();
  }
  render() {
    return <View>
      <ScrollView style={{
        width: width,

        flex: 1,
        backgroundColor: '#f2f2f2',
        position: 'relative'
      }}>
        <View style={{
          marginLeft: 10,
          marginRight: 10,
        }}>
          <View style={styles.btnGroup}>
            <View style={styles.btn}>
              <Text>月嫂</Text>
            </View>
            <View style={styles.btn}>
              <Text>育儿嫂</Text>
            </View>
            <View style={[styles.btn]}>
              <Text>全日制育儿嫂</Text>
            </View>
          </View>
          <FormItem label="服务城市" value="北京市北京辖区" getValue={this.getValue} />
          <FormItem label="预产期" value={this.state.ceshi} getValue={this.getValue} />
          <FormItem label="服务天数" value={this.state.ceshi} getValue={this.getValue} />
          <FormItem label="薪资范围" value={this.state.ceshi} getValue={this.getValue} />
          <FormItem label="工作年限" value={this.state.ceshi} getValue={this.getValue} />
          <FormItem label="籍贯" value={this.state.ceshi} getValue={this.getValue} />
        </View>
        <TouchableNativeFeedback>
          <View style={styles.searchBtnWrap}>
            <Text style={styles.searchBtn}>立即筛选</Text>
          </View>
        </TouchableNativeFeedback>
        {/* 面试指南 */}
        <MianShi navigation={this.props.navigation }/>
      </ScrollView>
      <Over showPicker={this.state.showPicker} />
    </View>
  }
}

export default Home;

const styles = StyleSheet.create({
  over: {
    position: 'absolute',
    backgroundColor: 'yellow',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(47, 47, 47, 0.6)',
  },
  btnGroup: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    width: (width - 20 * 4) / 3,
    backgroundColor: 'red',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',

  },
  searchBtnWrap: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  searchBtn: {
    alignItems: 'center',
    textAlign: 'center',
    width: 200,
    height: 40,
    lineHeight: 40,
    backgroundColor: 'red',
    fontSize: 16,
    color: '#fff'
  },
  MianShi: {

  },
  headImg: {

  }
})