import React from "react";
import faker from "faker";

const CommentDetail = props => {
    return ( <div className="comment">
    <a className="avatar">
      <img src={faker.image.avatar()} alt="hey" />
    </a>
    <div className="content">
      <a className="author">{props.author}</a>
      <div className="metadata">
        <div className="date">{props.timeago}</div>
      </div>
      <div className="text">
        {[props.textwithin]}
      </div>
    </div>
  </div>
    );
}

export default CommentDetail;