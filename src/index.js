import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from './CommentDetail'
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author ="Pushkar" timeago="2:00 PM" textwithin =" hola Bhaiyooon" />
      <CommentDetail author ="Anuj" timeago="2:01 PM" textwithin =" kaisn hai sab" />
      <CommentDetail author ="Prakash" timeago="2:02 PM" textwithin =" tumahri yaaad me" />

     
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
