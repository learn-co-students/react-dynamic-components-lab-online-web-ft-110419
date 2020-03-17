import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  } 
}

//<ColorBox opacity={this.props.opacity - 0.1} /> is recursively creating the div on line 7 first, then inside of that div,
  // creating another div inside of that div which in turn creates another div inside of that div. The returning div each time is just:
  
  /* <div className="color-box" style={{opacity: this.props.opacity}}>
    </div>
  */

