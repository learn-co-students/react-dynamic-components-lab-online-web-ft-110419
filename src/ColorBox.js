import React, { Component } from 'react';

export default class ColorBox extends Component {

   state = {
    todos: [
      
     ]
   }

   render() {
      if (this.props.opacity >= 2) {
        let opacity_v = this.props.opacity - 0.1
        return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            <ColorBox opacity={opacity_v} />
          </div>
        )
      }
      else {
       return null
      }
  }
 }

