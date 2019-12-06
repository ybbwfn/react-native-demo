import React, { Component } from 'react';

import { View, Text, ImageBackground, StyleSheet, TouchableNativeFeedback } from 'react-native';
class TabBar extends Component {
    componentDidMount() {
    
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback
                    //   onPress={this._onPressButton}
              
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.tabs}>
                        <ImageBackground
                            source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                            style={styles.icon}>
                        </ImageBackground>
                        <Text>首页</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    //   onPress={this._onPressButton}
                
                    background={TouchableNativeFeedback.SelectableBackground()}>
                 
                        <View style={styles.tabs}>
                            <ImageBackground
                                source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                                style={styles.icon}>
                            </ImageBackground>
                            <Text>我的</Text>
                        </View>
                
                </TouchableNativeFeedback>
            </View >
        );
    }
}

export default TabBar;

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ccc'
    },
    tabs: {
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        width: 25,
        height: 25,
        borderRadius: 100,
        overflow: 'hidden'
    }
})