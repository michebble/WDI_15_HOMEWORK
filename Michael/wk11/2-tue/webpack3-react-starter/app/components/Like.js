import React from 'React'

export default class Like extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      value: 0
    }

  }

  handleClick(event) {
    event.preventDefault()
    this.setState({
      value: this.state.value + 1
    })

  }

  render() {
    return <div>
      <input 
        value={this.state.value}
        type="text" />
      <button
        onClick={this.handleClick}
      >いいね！</button>
    </div>
  }

}
