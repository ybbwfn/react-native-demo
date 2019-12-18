import React, { Component } from 'react';
import {
    View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
    DatePickerAndroid, ToastAndroid
} from 'react-native';
const { width, height } = Dimensions.get('window');
function Title(props) {
  return <View style={{ width: width, }}>
    <Text style={{ height: 70, lineHeight: 70, fontSize: 18 }}>{props.title}</Text>
  </View>
}

export default Title;
