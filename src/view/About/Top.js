

import React, { Component } from 'react';
import {
  Button,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableNativeFeedback
} from 'react-native'
import { connect } from 'react-redux';


const { width, height } = Dimensions.get('window');
//返回数据的方法，供我们connect使用，他会帮我们把数据转换成props
const mapStateToProps = (state) => {
  return {
    tab: state.tab
  }
}
//返回dispatch方法的方法，供我们connect使用，他会帮我们把dispatch转换成props
const mapDispatchToProps = (dispatch) => {
  return {
    setTab: (data) => dispatch({ type: 'setTab', data: data }),
  }
}
class Btn extends Component {
  render() {
    return (<TouchableNativeFeedback
      //   onPress={this._onPressButton}
      background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={[this.props.style, { width: 110, height: 35,  alignItems: 'center', justifyContent: 'center', }]}>
        <Text style={{ color: this.props.style.color }}>{this.props.title}</Text>
      </View>
    </TouchableNativeFeedback>)
  }
}

class Top extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../img/my.png")}
        style={styles.container}>
        <View style={styles.btnBox}>
          <Btn title="登录" style={{backgroundColor:'#fff',borderRadius: 20,color:'orange'}} />
          <Btn title="注册" style={{borderWidth:1,borderColor:'#fff',borderRadius: 20,color:'#fff'}} />
        </View>

      </ImageBackground>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Top);

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width / 2.5,

  },
  btnBox: {
    height: width / 2.5 - 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
})