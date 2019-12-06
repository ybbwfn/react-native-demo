import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        //React Native 还支持WebSocket，这种协议可以在单个 TCP 连接上提供全双工的通信信道。
        // const ws = new WebSocket('ws://host.com/path');
        // ws.onopen = () => {
        //     // connection opened
        //     ws.send('something'); // send a message
        // };
        // ws.onmessage = (e) => {
        //     // a message was received
        //     console.log(e.data);
        // };
        // ws.onerror = (e) => {
        //     // an error occurred
        //     console.log(e.message);
        // };
        // ws.onclose = (e) => {
        //     // connection closed
        //     console.log(e.code, e.reason);
        // };

        // 你也可以在 React Native 应用中使用 ES2017 标准中的async/await 语法：
        // 注意这个方法前面有async关键字
        // async function getMoviesFromApi() {
        //   try {
        //     // 注意这里的await语句，其所在的函数必须有async关键字声明
        //     let response = await fetch(
        //       'https://facebook.github.io/react-native/movies.json',
        //     );
        //     let responseJson = await response.json();
        //     return responseJson.movies;
        //   } catch (error) {
        //     console.error(error);
        //   }
        // }

        // fetch('https://mywebsite.com/endpoint/', {
        //     method: 'POST',
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       firstParam: 'yourValue',
        //       secondParam: 'yourOtherValue',
        //     }),
        //   });
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>{item.releaseYear}---- {item.title}</Text>}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }
}