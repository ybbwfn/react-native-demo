import React, { Component } from 'react';
import {
    View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
    DatePickerAndroid, ToastAndroid, ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
const mapStateToProps = (state) => {
    return {
        tab: state.tab
    }
}
function ImgBtn(props) {
    return <TouchableNativeFeedback onPress={() => { props.tab.push(props.path) }}>
        <ImageBackground source={props.imgSrc} style={styles.serviceBtn}>{props.text}</ImageBackground >
    </TouchableNativeFeedback>
}
const ImgBtns = connect(
    mapStateToProps
)(ImgBtn);
export default ImgBtns;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    serviceBtn: {
        width: width / 2 - 20,
        height: (width / 2 - 20) / 2,
        marginBottom: 10,
    },
})