import React from 'react';
import { Text, View} from 'react-native';


// import Font from '../fonts/Font'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IconWithBadge from '../component/IconWithBadge'

import Home from '../view/Home'
import About from '../view/About'
import HouseKeep from '../view/HouseKeep/index.js'
import Find from '../view/Find'
import { connect } from 'react-redux';
//返回数据的方法，供我们connect使用，他会帮我们把数据转换成props
const mapStateToProps=(state)=>{
  return {
   tab:state.tab
  }
}
//返回dispatch方法的方法，供我们connect使用，他会帮我们把dispatch转换成props
const mapDispatchToProps=(dispatch)=>{
 return {
     setTab:(data)=>dispatch({type:'setTab',data:data}),
 }
}
// 
class HomeScreen extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Home />
      </View>
    );
  }
}

class HousekeepScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <HouseKeep navigation={this.props.navigation}/>
      </View>
    );
  }
}

class FindgsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Find />
      </View>
    );
  }
}

class MyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <About />
      </View>
    );
  }
}


const stackRouterMap = {
    '首页': HomeScreen,
    '家政': HousekeepScreen,
    '发现': FindgsScreen,
    '我的': MyScreen,
}
const TabNavigator = createBottomTabNavigator(stackRouterMap,{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = IconWithBadge;
        let iconName;
        if (routeName === '首页') {
          iconName = `home${!focused ? '' : '-solid'}`;
        } else if (routeName === '家政') {
          iconName = `service${!focused ? '' : '-solid'}`;
        } else if (routeName === '发现') {
          iconName = `find${!focused ? '' : '-solid'}`;
        } else if (routeName === '我的') {
          iconName = `my${!focused ? '' : '-solid'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} badgeCount={2}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FE9B40',
      inactiveTintColor: 'gray',
      tabBarVisible:true,
    },
  }
);

export default TabNavigator;