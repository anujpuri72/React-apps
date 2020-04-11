import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import { fetchStream, deleteStream } from "../actions";
import flv from "flv.js";
class streamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildplayer();
  }
  componentDidUpdate() {
    this.buildplayer();
  }
  componentWillUnmount() {
    this.palyer.destroy();
  }
  buildplayer() {
    if (this.palyer || !this.props.stream) {
      return;
    }
    this.palyer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
    this.palyer.attachMediaElement(this.videoRef.current);
    this.palyer.load();
  }

  render() {
    if (!this.props.stream) return <div>Loading</div>;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls></video>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}
const mapStateToprops = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToprops, { fetchStream, deleteStream })(
  streamShow
);
