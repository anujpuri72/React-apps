import React from "react";
import { connect } from "react-redux";
import { SignIn, SignOut } from "./actions";
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "46077703314-t7m4kath2aeohtovmtatnd6acvka2mq9.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthchange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthchange);
        });
    });
  }
  onAuthchange = isSignedIn => {
    if (isSignedIn) {
      this.props.SignIn(this.auth.currentUser.get().getId());
    } else {
      this.props.SignOut();
    }
  };
  signInButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={() => {
            this.auth.signOut();
          }}
          className="ui blue google button"
        >
          <i className="google icon"></i>Sign out
        </button>
      );
    } else
      return (
        <button
          onClick={() => {
            this.auth.signIn();
          }}
          className="ui blue google button"
        >
          <i className="google icon"></i>SIGN IN
        </button>
      );
  }
  render() {
    
    return <div>{this.signInButton()}</div>;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { isSignedIn: state.auth.isSignedIn};
};
export default connect(mapStateToProps, { SignIn, SignOut })(GoogleAuth);
