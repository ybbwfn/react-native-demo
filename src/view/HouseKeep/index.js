import React, { Component } from 'react';
import { View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions } from 'react-native';
import FormItem from '../../component/Form/index.js'
import Picker from 'react-native-picker';
// let pickerData = [
//   [1,2,3,4],
//   [5,6,7,8],
// ]

// Picker.init({
//     pickerData: pickerData,
//     selectedValue: [59],
//     onPickerConfirm: data => {
//         console.log(data);
//     },
//     onPickerCancel: data => {
//         console.log(data);
//     },
//     onPickerSelect: data => {
//         console.log(data);
//     }
// });
// Picker.show();
const { width } = Dimensions.get('window');
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: null,
      ceshi: '全部'
    }
  }
  componentDidMount() {

  }
  render() {
    return <ScrollView style={{
      width: width,

      flex: 1,
      backgroundColor: '#f2f2f2'
    }}>
      <View style={{
        flex: 1,
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
        <FormItem label="服务城市" value={this.state.ceshi} />
        <FormItem label="预产期" value={this.state.ceshi} />
        <FormItem label="服务天数" value={this.state.ceshi} />
        <FormItem label="薪资范围" value={this.state.ceshi} />
        <FormItem label="工作年限" value={this.state.ceshi} />
        <FormItem label="籍贯" value={this.state.ceshi} />
      </View>
    </ScrollView>

  }
}

export default Home;

const styles = StyleSheet.create({
  btnGroup: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  btn: {
    width: (width - 20 * 4) / 3,
    backgroundColor: 'red',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',

  },
})