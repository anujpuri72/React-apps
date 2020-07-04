import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import userLocation from "./userLocation";

const App = () => {
  const [lat, err] = userLocation();
  let content;
  if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else if (err) {
    content = <div>ERROR : {err}</div>;
  } else {
    content = <Spinner message="Pls accept location request" />;
  }

  return <div className="border red"> {content}</div>;
};

ReactDom.render(<App />, document.querySelector("#root"));
