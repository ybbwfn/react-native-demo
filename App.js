// import App from './src/component/TabBar'
// // import App from './src/component/Index'
// export default App

import React, { Component } from 'react'
import SketchRouter from './src/router'

export default class App extends Component {
  render () {
    // console.disableYellowBox = true
    return (
        <SketchRouter />
    )
  }
}