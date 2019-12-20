import React, { Component } from 'react';
import { View ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
function Kong(props){
    let h = props.height || 5;
    let bg = props.backgroundColor || '#eee';
    return (
        <View style={{width:width,height:h,backgroundColor:bg}}/>
    );
}

export default Kong;