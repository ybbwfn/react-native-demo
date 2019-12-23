import React, { Component } from 'react';
import {
    View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
    DatePickerAndroid, ToastAndroid, ImageBackground,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window');
function PageItem(props) {
    return <View style={{paddingBottom:20,paddingTop:20,paddingLeft:10,paddingRight:10,borderColor:'#ccc',borderTopWidth:1,}}>
        <Text style={{fontSize:16}}>{props.title}</Text>
        <Image source={{ uri: props.imgSrc }} style={{ width: width - 20, height: (width - 20) / 2 ,marginTop:10,marginBottom:10,borderRadius:10}} />
        <Text style={{fontSize:14,color:'gray'}}>{props.imgSrc}</Text>
    </View>
}
class Knowledge extends Component {
    render() {
        const dataList = [
            { imgSrc: 'http://www.mumway.com/yuesaoPC/img/baby.png', title: "Image1", content:'啊范德萨发大水范德萨'},
            { imgSrc: 'https://facebook.github.io/react-native/img/tiny_logo.png', title: "Image2", content:'啊范德萨发大水范德萨'},
        ]
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
             
                <FlatList
                    data={dataList}
                    renderItem={({ item, index}) => (
                        <PageItem {...item} />
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>

        );
    }
}

export default Knowledge;