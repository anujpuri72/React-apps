import React from "react";
import { connect } from "react-redux";
import { fetchuser } from "../actions";
class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchuser(this.props.userID);
  }
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find(user => user.id === ownProps.userID) };
};
export default connect(mapStateToProps, { fetchuser })(UserHeader);
