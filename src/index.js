import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from './CommentDetail'
import Card from './Card'
const App = () => {
  return (
    
    <div className="ui container comments">
    <Card>
      <CommentDetail author ="Pushkar" timeago="2:00 PM" textwithin =" hola Bhaiyooon" />
      </Card>
      <Card>
      <CommentDetail author ="Anuj" timeago="2:01 PM" textwithin =" kaisn hai sab" />
      </Card>
      <Card>
      <CommentDetail author ="Prakash" timeago="2:02 PM" textwithin =" tumahri yaaad me " />     
      </Card>
      </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
