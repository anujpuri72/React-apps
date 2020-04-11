import React from "react";
import ReactDOM from "react-dom";
const Moadal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => props.ondismiss()}
      className="ui dimmer modals cisible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.description} </div>
        {props.modbut}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Moadal;
