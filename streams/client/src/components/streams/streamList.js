import React from "react";
import { Link } from "react-router-dom";
import { fetchStreams } from "../actions";
import { connect } from "react-redux";
class streamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdminbut(streams) {
    if (this.props.currentUserId === streams.userId)
      return (
        <div className="right floated content">
          <Link
            to={`/streams/edit/${streams.id}`}
            className="ui primary button"
          >
            Edit
          </Link>
          <Link
            to={`/streams/delete/${streams.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminbut(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  renderCreate() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/streams/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    );
  }
  render() {
    // console.log(this.props.streams);
    return (
      <div>
        <h2>streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapSTateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapSTateToProps, { fetchStreams })(streamList);
