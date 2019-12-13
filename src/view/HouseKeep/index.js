import React, { Component } from 'react';
import { View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Picker ,Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
const marginLeft = 20;
const btnW = (width-marginLeft*4)/3;
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      language:null,
    }
  }
componentDidMount() {

}
  render() {
    return <ScrollView style={{
      width:width,
      flex: 1,
      backgroundColor: '#f2f2f2'
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
        <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
    </ScrollView>

  }
}

export default Home;

const styles = StyleSheet.create({
  btnGroup:{
    flex:1,
    paddingTop:15,
    paddingBottom:15,
    flexDirection:'row',
    alignItems:'center',
  },
  btn:{
    width:btnW,
    backgroundColor:'red',
    alignItems:'center',
    height:50,
    justifyContent:'center',
    marginLeft:marginLeft,

  },
})