import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

class NetImg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBool: true
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ showBool: !this.state.showBool })
    }, 1000)

  }
  render() {
    return this.state.showBool ?
      (<>
        <Text>22</Text>
        <Image
          style={styles.box}
          source={{ uri: 'http://ybbwfn.top/nginx-logo.png' }}
        />
      </>) :
      (<>
        <Text>3</Text>
        <Image
          style={styles.box}
          source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
        />
      </>)

  }
}

class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBool: true
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ showBool: !this.state.showBool })
    }, 1000)

  }
  render() {
    return (
      <View style={styles.pageWrap}>
        <Text>1</Text>
        <Image
          style={styles.box}
          source={require('../img/tiny_logo.png')}
        />
        <NetImg />


      </View>
    );
  }
}

export default HelloWorldApp;


const styles = StyleSheet.create({
  pageWrap:{
    width: 300, 
    height: 300 ,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'red'
  },
  box:{
    width: 50, height: 50, backgroundColor: 'red' 
  },
})