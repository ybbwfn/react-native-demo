import React, { Component } from 'react';
import { View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, RefreshControl } from 'react-native';
import Swiper from '../../component/Swiper'
import Box from '../../component/Box'
class Home extends Component {

  render() {
    return <ScrollView style={{
      flex: 1,
      backgroundColor: '#f2f2f2'
    }}>
      <Swiper />
      <Box
        title="今日孕期知识"
        name="team"
        hideMore={true}
      >
        <Text>ceshi111111111111111111111122221</Text>
      </Box>
      <Box
        title="知识点播"
        name="play"
        hideMore={true}
      >
        <Text>ceshi11111111111111111111111</Text>
      </Box>
      <Box
        title="科普知识"
        name="earth"
        hideMore={true}
      >
        <Text>ceshi11111111111111111111111</Text>
      </Box>
      <Box
        title="圈子"
        name="codepen-circle"
        hideMore={true}
      >
        <Text>ceshi11111111111111111111111</Text>
      </Box>
      <Box
        title="热议"
        name="wechat"
        hideMore={true}
      >
        <Text>ceshi11111111111111111111111</Text>
      </Box>
    </ScrollView>
  }
}

export default Home;