import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: '2',
          headerRight: () => (
            <Button
              onPress={navigation.getParam('increaseCount')}
              title="+1"
              color="#61dafb"
            />
          ),
        };
      };
    
      componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
      }
    
      state = {
        count: 0,
      };
    
      _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
      };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen {this.state.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = {
        headerTitle:'1111',
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#61dafb"
          />
        ),
      };
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>
                    itemId: {JSON.stringify(navigation.getParam('itemId', '2222'))}
                </Text>
                <Text>
                    otherParam:
            {JSON.stringify(navigation.getParam('otherParam', '3333'))}
                </Text>
                <Button
                    title="Go to Details... again"
                    color="#61dafb"
                    onPress={() =>
                        navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })
                    }
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ itemId: 'Updated!' })}
                />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        // mode: 'modal',
        // headerMode: 'none',
    },
);

export default createAppContainer(AppNavigator);