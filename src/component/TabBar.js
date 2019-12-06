import React, { Component } from 'react';
import { View, Text, } from 'react-native';
class TabBar extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>首页</Text>
                    <ImageBackground source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                        style={{ width: 50, height: 50 }}>
                    </ImageBackground>
                </View>
                <View>
                    <Text>我的</Text>
                    <ImageBackground source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                        style={{ width: 50, height: 50 }}>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

export default TabBar;