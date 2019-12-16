import React from "react";
import ReactDom from "react-dom";
const App = () => {
  return (
    <div class="ui container comments">
      <div class="comment">
        <a class="avatar">
          <img src="/" alt="hey" />
        </a>
        <div class="content">
          <a class="author">Stevie Feliciano</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
          </div>
          <div class="text">
            Hey guys, I hope this example comment is helping you read this
            documentation.
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
