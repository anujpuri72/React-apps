import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import { fetchStream, deleteStream } from "../actions";
class streamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  ondelete = (id) => {
    this.props.deleteStream(id);
  };
  actions() {
    return (
      <div className="actions">
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui primary button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          cancel
        </Link>
      </div>
    );
  }
  rendercontent() {
    if (!this.props.stream) {
      return "Are u sure u want to delete the stream?";
    }
    return `Are u sure u want to delete the stream  with title: ${this.props.stream.title} ?`;
  }
  render() {
    return (
      <Modal
        title="DeleteStream"
        description={this.rendercontent()}
        modbut={this.actions()}
        ondismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToprops = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToprops, { fetchStream, deleteStream })(
  streamDelete
);
