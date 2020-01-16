import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return <div> Hi there </div>;
// };
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: "" }; // initialising state component
  // }
  state = { lat: null, errorMessage: "" }; //can do this because of babel

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude
        }),
      err =>
        this.setState({
          errorMessage: err.message
        })
    );
  }
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>ERROR : {this.state.errorMessage}</div>;
    }
    return <Spinner message="Pls accept location request" />;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
