import React, { Component } from 'react';
import { View, ScrollView, Image, Text, FlatList, SectionList, StyleSheet, RefreshControl } from 'react-native';
import Swiper from '../../component/Swiper'
import Box from '../../component/Box'
import Today from './Today';
import Play from './Play';
import Knowledge from './Knowledge'
import Circle from './Circle'
import HotSpeek from './HotSpeek'
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
        <Today />
      </Box>
      <Box
        title="知识点播"
        name="play"
      >
        <Play />
      </Box>
      <Box
        title="科普知识"
        name="earth"
        contentStyle={{paddingLeft:0,paddingRight:0}}
      >
        <Knowledge />
      </Box>
      <Box
        title="圈子"
        name="codepen-circle"
      >
        <Circle />
      </Box>
      <Box
        title="热议"
        name="wechat"
        contentStyle={{paddingLeft:0,paddingRight:0}}
      >
        <HotSpeek />
      </Box>
    </ScrollView>
  }
}

export default Home;