import React, { Component } from "react";
import BlogPost from "./BlogPost";
//your code here
 class Comment extends Component{
     render(){
         return (
            <div class="comment" className="comment">{this.props.commentText}</div>
         )
     }

 }
 export default Comment