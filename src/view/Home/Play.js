import React, { Component } from 'react';
import {
    View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
    DatePickerAndroid, ToastAndroid, ImageBackground,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign'


const { width, height } = Dimensions.get('window');
const w = width / 3 - 20;
const h = width / 3 - 20 + 50;

function PlayItem(props){
    let bg = props.bg || 'rgba(255, 141, 161, 0.8)'
    return                 <ImageBackground
    source={require("../../img/d.png")}
    style={{ width: w, height: h }}>
    <View style={{ width: w, height: w, alignItems: "center", justifyContent: 'center' }}>

        <IconAnt name='rightcircleo' size={42} color='#fff' />
    </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' ,backgroundColor:bg,padding:5}}>
        <Text style={{color:'#fff'}} numberOfLines={2}>孕期大讲堂系列课程</Text>
    </View>
</ImageBackground>
}
class Play extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                <PlayItem />
                <PlayItem bg='rgba(245,163,86, 0.8)'/>
                <PlayItem />

            </View>

        );
    }
}

export default Play;