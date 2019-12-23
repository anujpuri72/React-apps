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
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" }; // initialising state component
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }
  render() {
    return (
      <div>
        Latitude :{this.state.lat}
        <br></br>
        Error : {this.state.errorMessage}
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
