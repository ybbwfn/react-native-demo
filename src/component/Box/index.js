import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign'

// function Right(props){
//     return  props.hideMore ? null: <IconAnt name='right' size={24} color='gray' />;
// }

class Right extends Component {
    render() {
        return  (this.props.hideMore ? null: <IconAnt name='right' size={24} color='gray' />);
    }
}
class BoxWrap extends Component {
    render() {
        const { name = 'form', color = '#FE9B40', size = 24, title ,hideMore} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titleStyle}>
                    <IconAnt style={styles.iconLeft} name={name} size={size} color={color} />
                    <Text style={styles.titleText}>{title}</Text>
                    <Right hideMore={hideMore}/>
                </View>
                <View style={styles.content}>
                    {this.props.children}
                </View>
                
            </View>
        );
    }
}

export default BoxWrap;

const styles = StyleSheet.create({
    titleStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 50,
        paddingRight: 5,
        paddingLeft: 5,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    iconLeft:{
        paddingLeft:5,
        paddingRight:15,
    },
    titleText:{
        flex:1,
    },
    container: {
        marginTop:10,
    },
    content:{
        backgroundColor:'#fff',
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:10,
    }
})