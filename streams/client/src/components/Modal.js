import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
const Moadal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals cisible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">Are u sure u want to deletethe stream ? </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Moadal;
