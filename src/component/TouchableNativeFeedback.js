import React, { Component } from 'react'
import {
    Text,
    View, TouchableNativeFeedback,


} from 'react-native'

export default class App extends Component {
    render() {
        return (<TouchableNativeFeedback
            //   onPress={this._onPressButton}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{ width: 150, height: 100, backgroundColor: 'red' }}>
                <Text style={{ margin: 30 }}>TouchableNativeFeedback</Text>
            </View>
        </TouchableNativeFeedback>)
    }
}