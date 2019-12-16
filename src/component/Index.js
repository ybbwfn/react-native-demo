import React, { Component } from 'react'
import DrawerLayoutAndroid from './DrawerLayoutAndroid'
import List from './List'
import Modal from './Modal'
import TouchableHighlight from './TouchableHighlight'
import TouchableOpacity from './TouchableOpacity'
import TouchableNativeFeedback from './TouchableNativeFeedback'
import ViewPagerAndroid from './ViewPagerAndroid'
import {
    Text,
    TextInput,
    View,
    StyleSheet,

    ActivityIndicator,
    Button,
    ImageBackground, KeyboardAvoidingView, Picker, ProgressBarAndroid, Slider, StatusBar, Switch,
    ToolbarAndroid, 


} from 'react-native'
// import { WebView } from 'react-native-webview';
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switch: true,
        }
    }
    render() {
        return (

            <DrawerLayoutAndroid>
                <View style={[styles.container]}>
                    <View style={styles.items}>
                        <Text>loading:</Text>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                    <View style={styles.items}>
                        <Text>Button:</Text>
                        <Button
                            onPress={() => { alert(1) }}
                            title="Learn More"
                            color="#841584"
                        />
                    </View>
                    <View style={styles.items}>
                        <Text>flatList&&ScrollView:</Text>
                        <List />
                    </View>
                    <View style={styles.items}>
                        <Text>ImageBackground:</Text>
                        <ImageBackground source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }} style={{ width: 50, height: 50 }}><Text>Inside</Text></ImageBackground>
                    </View>
                    <View style={styles.items}>
                        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                            <Text>KeyboardAvoidingView、TextInput:   在这里放置需要根据键盘调整位置的组件</Text>
                            <TextInput
                                style={{ height: 40 }}
                                placeholder="Type here to translate!"
                                onChangeText={text => console.log(text)}
                            />
                        </KeyboardAvoidingView>
                    </View>
                    <View style={styles.items}>
                        <Text>Modal:</Text><Modal />
                    </View>
                    <View style={styles.items}>
                        <Text >Picker:</Text>
                        <Picker
                            selectedValue="java"
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={styles.items}>
                        <Text >ProgressBarAndroid:</Text>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={0.9} />
                    </View>
                    <View style={styles.items}>
                        <Text >Slider:</Text>
                        <Slider
                            style={{ width: 200, height: 40 }}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                        />
                    </View>
                    <View style={styles.items}>
                        <Text>StatusBar:</Text>
                        {/* <StatusBar hidden={true} /> */}
                        <StatusBar backgroundColor='red' />
                    </View>
                    <View style={styles.items}>
                        <Text>Switch:</Text>
                        <Switch
                            style={{ padding: 20 }}
                            value={this.state.switch}
                            // disabled={item.disabled} 
                            // trackColor={item.trackColor} 
                            // thumbColor={item.thumbColor} 
                            onValueChange={value => { this.setState({ switch: value }); }}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text>ToolbarAndroid:   error</Text>
                        {/* <ToolbarAndroid logo={require('../img/cat.png')}
                            title='ToolbarDemo'
                            subtitle='这是副标题'
                            actions={this.state.setting}
                            style={styles.toolbarStyle}
                            navIcon={require('../img/cat1.png')}
                        >
                        </ToolbarAndroid> */}

                    </View>
                    <View style={styles.items}>
                        <Text>Touch</Text>
                        <TouchableHighlight />
                        <TouchableOpacity />
                        <TouchableNativeFeedback />
                    </View>
                    <View style={styles.items}>
                        <Text>ViewPagerAndroid:   error</Text>
                        {/* <ViewPagerAndroid /> */}
                    </View>
                    <View style={styles.items}>
                        <Text>VirtualizedList:   FlatList和SectionList的底层实现</Text>
                    </View>
                    <View style={styles.items}>
                        {/* <Text>WebView:</Text>
                        <WebView
                            source={{ uri: 'https://www.baidu.com' }}
                            style={{ marginTop: 20 }}
                        /> */}
                    </View>



                </View>
            </DrawerLayoutAndroid>

        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    toolbarStyle: {
        width: 500,
        height: 60,
    }
})