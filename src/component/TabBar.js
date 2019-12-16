import React from 'react';
import { Text, View} from 'react-native';


// import Font from '../fonts/Font'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IconWithBadge from './IconWithBadge'

import Home from '../view/Home'
import About from '../view/About'
import HouseKeep from '../view/HouseKeep/index.js'

function Ceshi(){
  return <Text>11</Text>
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
        <HouseKeep />
      </View>
    );
  }
}

class FindgsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>1111</Text>
      </View>
    );
  }
}
class MyScreen extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <About />
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    '首页': Ceshi,
    '家政': HousekeepScreen,
    '发现': FindgsScreen,
    '我的': MyScreen,
  },
  {
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
    },
  }
);

export default createAppContainer(TabNavigator);