import React, { Component } from 'react';
import {
    View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, Dimensions, TouchableNativeFeedback,
    DatePickerAndroid, ToastAndroid
} from 'react-native';
import Kong from '../../component/Kong'
import txt from './ceshi.json'
import { Nav } from '../Find/Form'
import { ImgOver } from '../Find/Top'
const { width, height } = Dimensions.get('window');

function Ellipsis() {
    return <View style={{ width: '100%', height: 50, justifyContent: "center", alignItems: "center" }}>
        <Text style={{}}>---点击查看全文---</Text>
    </View>
}
function NavList() {
    const arr = [

        { title: '预产期测试', color: '#F8BD08', backgroundColor: '#FBE7A5', icon: 'carryout' },
        { title: '产检表', color: '#ED8B58', backgroundColor: '#F6C7AA', icon: 'profile' },

        { title: '疫苗接种', color: '#70C3FF', backgroundColor: '#C7EEFD', icon: 'pushpino' },
        { title: '更多', color: '#8984F8', backgroundColor: '#CACCFC', icon: 'menuunfold' },
    ];
    return <View style={{ height: 120, flexDirection: "row", justifyContent: 'space-around', alignItems: "center" }}>
        {arr.map((item, index) => {
            return <Nav key={index} {...item} />
        })}
    </View>
}

class Today extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtList: []
        }
    }
    componentDidMount() {
        let arr = txt.txt.split("AAAA");
        this.setState({
            txtList: arr.slice(0, 5)
        })
    }
    render() {

        return <View style={styles.container}>
            {this.state.txtList.map((item, index) => {
                return <Text numberOfLines={500} key={index} style={{ fontSize: 16, lineHeight: 30 }}>{item}</Text>
            })}
            {this.state.txtList.length > 4 ? <Ellipsis /> : null}
            <Kong />
            <NavList />
            <Kong />
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', paddingTop: 20 }}>
                <ImgOver
                    imgSrc={require("../../img/home1.png")}
                    style={{
                        borderRadius: 7,
                        width: width / 2 - 15,
                        height: (width / 2 - 15) / 1.425,
                        alignItems: 'center'

                    }}>

                    <Text style={{ color: '#ccc', fontSize: 18, textAlign: 'center', lineHeight: 40 }}>
                        全面两孩{"\n"}
                        <Text style={{ fontSize: 14 }}>两孩时代 育子心得</Text>
                    </Text>
                </ImgOver>
                <ImgOver
                    imgSrc={require("../../img/home2.png")}
                    style={{
                        borderRadius: 7,
                        width: width / 2 - 15,
                        height: (width / 2 - 15) / 1.425,
                        alignItems: 'center'
                    }}>
                    <Text style={{ color: '#ccc', fontSize: 18, textAlign: 'center', lineHeight: 40 }}>
                        托幼指导{"\n"}
                        <Text style={{ fontSize: 14 }}>托幼机构 未来标准</Text>
                    </Text>
                </ImgOver>
            </View>
        </View>
    }
}

export default Today;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

})