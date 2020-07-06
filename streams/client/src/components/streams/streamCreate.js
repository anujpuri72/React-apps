import React from "react";

import { createStream } from "../actions";
import { connect } from "react-redux";
import StreamForm from "./streamForm";

class streamCreate extends React.Component {
  onSubmit = (formvalues) => {
    this.props.createStream(formvalues);
     console.log(formvalues);
  };
  render() {
    return (
      <div>
        <h3>createStream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(streamCreate);
