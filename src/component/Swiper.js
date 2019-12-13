import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

import Swiper from 'react-native-swiper';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper}
          // onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
          activeDot={<View style={{ backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10
          }} 
          autoplay = {true}
      >
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../img/banner1.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../img/banner2.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../img/banner3.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../img/c.png')} />
          </View>
        </Swiper>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width:width,
    // borderBottomColor:'red',
    // borderBottomWidth:1,
    // borderStyle:'solid',
    paddingBottom:40,
    backgroundColor:'#fff'
  },
  wrapper: {
  
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
  },
  image: {
    width,
    height: 120,
    flex: 1
    }
});