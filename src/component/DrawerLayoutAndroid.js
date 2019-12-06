import React, { Component } from 'react';
import {
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';

export default class App extends Component {
  
  render() {
    var navigationView = (
      <View style={styles.container}>
        <View style={styles.nav_top_view}>
          <Image
            style={styles.headImg}
            source = {
              require('../img/cat.png')
            }
          />
          <Text
            style={styles.draw_title}>duoduo_1101</Text>
        </View>
        <TouchableOpacity
          onPress={this.close}
        >
          <View style={styles.nav_item_view}>
            <Image
              style={styles.itemImg}
              source = {
                require('../img/cat.png')
              }
            />
            <Text
              style={styles.item_text}>首页</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.nav_item_view}>
          <Image
            style = {
              styles.itemImg
            }
            source = {
              require('../img/cat.png')
            }
          />
          <Text
            style={styles.item_text}>礼物</Text>
        </View>
        <View style={styles.nav_item_view}>
          <Image
            style = {
              styles.itemImg
            }
            source={require('../img/cat.png')}
          />
          <Text
            style={styles.item_text}>设置</Text>
        </View>
      </View>
    );
    return (
    <DrawerLayoutAndroid
        ref={(drawer) => { this.drawer = drawer; }}
        drawerWidth={260}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.container}>
             <View style={styles.title_view}>
             <TouchableOpacity
              onPress={this.open}
            >
            <Image 
           style={styles.title_left_icon}
           source = {
             require('../img/cat.png')
           }
        />
          </TouchableOpacity>
         <Text style={styles.title_text}>
            DrawerLayoutAndroid抽屉
         </Text>
           <Text style={styles.title_text}>
               更多
         </Text>
             </View>
             {this.props.children}
        </View>
       
      </DrawerLayoutAndroid>
    )
  }

  open = () => {
    this.drawer.openDrawer();
  }
  close = () => {
    this.drawer.closeDrawer();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },

  nav_top_view: {
      flexDirection: 'column',
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#27b5ee',
    },
    nav_item_view: {
      flexDirection: 'row',
      height: 50,
      paddingLeft: 30,
      paddingTop: 6,
      paddingBottom: 6,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    title_view: {
      flexDirection: 'row',
      height: 50,
      paddingLeft: 15,
      paddingRight: 15,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#27b5ee',
    },
    title_text: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center'
  },
  headImg: {
    width: 50,
    height: 50
  },

  itemImg: {
    width: 20,
    height: 20
  },

  draw_title: {
    marginTop: 10,
    fontSize: 16,
    color: 'white'
  },
  item_text: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 10
  },
  title_left_icon: {
    height: 30,
    width:30
  }

});