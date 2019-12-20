

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
      <View style={[this.props.style, { width: 110, height: 35, alignItems: 'center', justifyContent: 'center', }]}>
        <Text style={{ color: this.props.style.color }}>{this.props.title}</Text>
      </View>
    </TouchableNativeFeedback>)
  }
}
export function ImgOver(props) {
  return <View>
    <Image
      source={props.imgSrc}
      style={props.style} />
    <View style={[{
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },props.style]}>
      {props.children}
    </View></View>
}

class Top extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImgOver
          imgSrc={require("../../img/banner1.png")}
          style={{
            borderRadius: 20,
            width: width - 40,
            height: width / 2.5,
          }}>
          <Btn title="我要提问"
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 20,
              color: 'orange',
              position: 'relative',
              top: -10
            }} />
        </ImgOver>
        {/* <Image
          source={require("../../img/banner1.png")}
          style={styles.bg} />
        <View style={styles.btnBox}>
          <Btn title="我要提问"
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 20,
              color: 'orange',
              position: 'relative',
              top: -10
            }} />
        </View> */}
      </View>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Top);

const styles = StyleSheet.create({
  container: {

    width: width,
    height: width / 2.5 + 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})