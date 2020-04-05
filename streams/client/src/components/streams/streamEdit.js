import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../actions";
import StreamForm from "./streamForm";

class streamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formvalues) => {
    // this.props.createStream(formvalues);
    console.log(formvalues);
    this.props.editStream(this.props.match.params.id, formvalues);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{
            title: `${this.props.stream.title}`,
            description: `${this.props.stream.description}`,
          }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToprops = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToprops, { fetchStream, editStream })(
  streamEdit
);
