import React, { Component } from 'react';
import {
    View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
    DatePickerAndroid, ToastAndroid, ImageBackground,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window');
function PageItem(props) {
    return <View style={styles.wrap}>
        <Image source={{ uri: props.imgSrc }} style={styles.touxiang} />
        <View style={styles.right}>
            <Text style={{ fontSize: 14 }}>{props.title}</Text>
            <Text style={styles.btn}>加入圈子</Text>
        </View>
    </View>
}
class Circle extends Component {
    render() {
        const dataList = [
            { title: "孕前", imgSrc: 'http://www.mumway.com/yuesaoPC/img/baby.png', },
            { title: "孕中", imgSrc: 'http://www.mumway.com/yuesaoPC/img/baby.png', },
            { title: "产后", imgSrc: 'http://www.mumway.com/yuesaoPC/img/baby.png', },
            { title: "育婴", imgSrc: 'http://www.mumway.com/yuesaoPC/img/baby.png', },
            { title: "育儿", imgSrc: 'http://www.mumway.com/yuesaoPC/img/baby.png', },
        ]
        return (
            <ScrollView
                horizontal={true}
                style={{ height: 100 }}>
                {
                    dataList.map((item, index) => {
                        return <PageItem key={index} {...item} />
                    })
                }
            </ScrollView>
        );
    }
}

export default Circle;

const styles = StyleSheet.create({
    wrap: {
        marginRight:10,
        width: 150,
        height: 80,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        borderBottomWidth: 2,
        borderRightWidth: 1.5
    },
    touxiang: { width: 60, height: 60 ,borderRadius:100},
    right: { marginLeft:10,width:60 ,height:60,justifyContent:'space-around'},
    btn: { height:20,lineHeight:20,fontSize: 12, color: 'orange', borderRadius: 10, borderWidth:1,borderColor:'orange',textAlign:'center'}
})