import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        const newOpacity = this.props.opacity - 0.1
        return this.props.opacity === 0.2 ? null : ( <div>
            <ColorBox opacity={this.props.opacity - 0.1}
      </div>)
      </div>
    )
  }

}