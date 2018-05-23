import React from 'react'
import HelloWorld from './HelloWorld'
import Bar from './Bar'
import Slider from './Slider'
import Like from './Like'

export default class App extends React.Component {

  constructor(props) {
    
    super(props)
  }

  render() {
    return <div>
      <h2>testing</h2>
      <HelloWorld name="codebusters"/>
      <HelloWorld name="WDI 15"/>
      <Slider />
      <Slider startValue="5" />
      <Bar />
      <Bar width="19%"/>
      <Bar width="80%" color="limegreen"/>
      <Like />
    </div>
  }

}
