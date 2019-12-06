import React, { Component } from 'react';
import { View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet ,RefreshControl} from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      dataList : [
        { img: 'https://facebook.github.io/react-native/img/tiny_logo.png', key: "1", name: "Image1" },
        { img: 'https://facebook.github.io/react-native/img/tiny_logo.png', key: "2", name: "Image2" },
      ]
    };
  }

  _onRefresh = () => {
    alert(1111)
    var arr = [...this.state.dataList,...this.state.dataList];
    this.setState({
      refreshing: true,
      dataList:arr
    },()=>{
      this.setState({refreshing: false});
    });
  }
  render() {

    return (
      <ScrollView 
      horizontal 
      style={{height:100}}
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      }
      >
        <FlatList
          data={this.state.dataList}
          renderItem={({ item }) => (
            <View>
              <Text >{item.name}</Text>
              <Image source={{ uri: item.img }} style={{ width: 64, height: 64 }} />
            </View>
          )}
        />
        <View style={styles.container}>
          <SectionList
            sections={[
              { title: 'SectionList1', data: ['Devin', 'Dan'] },
              { title: 'SectionList2', data: ['Jackson'] },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})