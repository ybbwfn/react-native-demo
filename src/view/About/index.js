// import React, { Component } from 'react';
// import {Button,View} from 'react-native'
// class index extends Component {
//   render() {
//     return (
//       <View>
//         <Button onPress={()=>this.props.navigation.navigate('Flex')} title='dianji'></Button>
//       </View>
//     );
//   }
// }

// export default index;

import React, { Component } from 'react';
import {Button,View} from 'react-native'
import { connect } from 'react-redux';

//返回数据的方法，供我们connect使用，他会帮我们把数据转换成props
 const mapStateToProps=(state)=>{
     return {
      tab:state.tab
     }
 }
 const _this = null;
//返回dispatch方法的方法，供我们connect使用，他会帮我们把dispatch转换成props
const mapDispatchToProps=(dispatch)=>{
    return {
        setTab:()=>dispatch({type:'setTab',data: _this}),
    }
}

class index extends Component {
  render() {
    return (
      <View>
        <Button onPress={()=>this.props.tab.navigate('Flex')} title='dianji'></Button>
      </View>
    );
  }
}
export default connect(
  mapStateToProps,mapDispatchToProps
)(index);