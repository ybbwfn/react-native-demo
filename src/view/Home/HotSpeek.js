import React, { Component } from 'react';
import {
    View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
    DatePickerAndroid, ToastAndroid, ImageBackground,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window');
function PageItem(props) {
    return <View style={{ paddingBottom: 20, paddingTop: 20, paddingLeft: 10, paddingRight: 10, borderColor: '#ccc', borderTopWidth: 1, }}>
        <Text style={{ fontSize: 16 }}>{props.title}</Text>
        <Text numberOfLines={2} style={{ fontSize: 14, color: 'gray',marginTop:10, marginBottom:10 }}>{props.content}</Text>
        <View style={{ flex:1, flexDirection: 'row',justifyContent:'flex-end' }}>
            <IconAnt name="eyeo" size={16}/>
            <Text>{props.count}</Text>
        </View>
    </View>
}
class HotSpeek extends Component {
    render() {
        const dataList = [
            { title: "Image1", content: '啊范德萨发大水范德萨', count: 1121 },
            { title: "Image2", content: '啊范德萨发大水范德萨', count: 13 },
        ]
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>

                <FlatList
                    data={dataList}
                    renderItem={({ item, index }) => (
                        <PageItem {...item} />
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>

        );
    }
}

export default HotSpeek;