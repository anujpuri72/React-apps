import React from "react";
import { connect } from "react-redux";
import { fetchposts } from "../actions";
import UserHeader from "./UserHeader";
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchposts();
  }
  renderedList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserHeader userID={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderedList()}</div>;
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchposts })(PostList);
