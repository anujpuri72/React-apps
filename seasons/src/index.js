import React from "react";
import ReactDom from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return <div> Hi there </div>;
// };
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div> Latitude </div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
