import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsandUsers = () => async (dispatch, getState) => {
  console.log("POSTS TO BE FETCHED");
  await dispatch(fetchposts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  console.log(userIds);
  userIds.forEach(ids => dispatch(fetchuser(ids)));
};
export const fetchposts = () => async dispatch => {
  const respone = await jsonPlaceholder.get("./posts");
  dispatch({ type: "FETCH_POSTS", payload: respone.data });
};
export const fetchuser = id => async dispatch => {
  const respone = await jsonPlaceholder.get(`./users/${id}`);
  dispatch({ type: "FETCH_USER", payload: respone.data });
};
// const _fetchUser = _.memoize(async (id, dispatch) => {});
