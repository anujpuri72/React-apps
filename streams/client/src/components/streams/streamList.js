import React from "react";
import { fetchStreams } from "../actions";
import { connect } from "react-redux";
class streamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h2>streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}
const mapSTateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};
export default connect(mapSTateToProps, { fetchStreams })(streamList);
