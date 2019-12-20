import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableNativeFeedback,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign'


class Right extends Component {
    render() {
        return (this.props.hideMore ? null : <IconAnt name='right' size={24} color='gray' />);
    }
}
function BoxIcon(props){
    return props.icon ? <IconAnt name={props.icon} size={24} color='orange' style={{marginLeft:8,marginRight:12}}/> :null;
}
class BoxWrap extends Component {
    getValue(text){
        this.props.getValue(text)
    }
    render() {
        const { label, value = null, color = '#FE9B40', hideMore } = this.props;
        return (
            <View style={[styles.formItem,{borderBottomWidth:this.props.noUnder?0:1}]}>
                <BoxIcon icon={this.props.icon}/>
                <Text style={styles.left}>{label}</Text>
                <TouchableNativeFeedback
                    onPress={() => { this.getValue(label) }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.right} >
                        <Text style={styles.value}>{value}</Text>
                        <Right hideMore={hideMore} />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

export default BoxWrap;

const styles = StyleSheet.create({
    formItem: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,

        borderStyle: 'solid',
        borderBottomColor: '#ccc',
    },
    left: {
        flex: 1,
        color: 'gray',
        fontSize: 18
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-end',
    },
    value: {
        fontSize: 18,
        marginRight: 10
    }

})