

import React, { Component } from 'react';
import {Button,View,Text,StyleSheet,Dimensions} from 'react-native'
import { connect } from 'react-redux';


import FormItem from '../../component/Form/index.js'
import Kong from '../../component/Kong'
const { width, height } = Dimensions.get('window');

//返回数据的方法，供我们connect使用，他会帮我们把数据转换成props
 const mapStateToProps=(state)=>{
     return {
      tab:state.tab
     }
 }
//返回dispatch方法的方法，供我们connect使用，他会帮我们把dispatch转换成props
const mapDispatchToProps=(dispatch)=>{
    return {
        setTab:(data)=>dispatch({type:'setTab',data: data}),
    }
}


class Form extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {

  }
  getValue = () => {

  }
  render() {
    return (
      <View style={styles.bg}>
        <FormItem icon='smileo' label="当前装态" value="备孕" getValue={this.getValue} noUnder={true}/>
        <FormItem icon='addusergroup' label="关联宝爸/妈" value="" getValue={this.getValue} noUnder={true}/>
        <Kong height={10} backgroundColor="#f1f1f1"/>
        <FormItem icon='setting' label="设置" value="" getValue={this.getValue} noUnder={true}/>

      </View>
    );
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(Form);

const styles = StyleSheet.create({
  bg:{
    width:width,
    flex:1,
  }
})