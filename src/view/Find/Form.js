

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'

function Cicle(props) {
  let bg = props.backgroundColor || '#FFCEDA';
  let color = props.color || '#fff';
  let icon = props.icon || 'questioncircle'
  return <View style={{
    backgroundColor: bg,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <IconAnt style={{}} name={icon} size={32} color={color} />
  </View>
}

export function Nav(props) {
  return <View style={{ width: '33.3%', height: 85, alignItems: 'center', justifyContent: 'space-between' }}>
    <Cicle {...props}/>
<Text style={{color:props.color||'#000'}}>{props.title}</Text>
  </View>
}

class Form extends Component {
  render() {
    const arr = [
      { title: '安全期测试', color: '#60D34D', backgroundColor: '#D1F3C0', icon: 'warning' },
      { title: '排卵期测试', color: '#FD7096', backgroundColor: '#FDCED9', icon: 'form' },
      { title: '预产期测试', color: '#F8BD08', backgroundColor: '#FBE7A5', icon: 'carryout' },
      { title: '产检表', color: '#ED8B58', backgroundColor: '#F6C7AA', icon: 'profile' },
      { title: '身高体重', color: '#69CD4F', backgroundColor: '#D6EFBF', icon: 'dashboard' },
      { title: '疫苗接种', color: '#70C3FF', backgroundColor: '#C7EEFD', icon: 'pushpino' },
    ];
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          {
            arr.slice(0, 3).map(item => {
              return <Nav {...item}/>
            })
          }

        </View>
        <View style={styles.row}>
          {
            arr.slice(3).map(item => {
              return <Nav {...item}/>
            })
          }
        </View>
      </View>
    );
  }
}
export default Form;


const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
})