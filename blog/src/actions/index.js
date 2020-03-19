import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
export const fetchposts = () => async dispatch => {
  const respone = await jsonPlaceholder.get("./posts");
  dispatch({ type: "FETCH_POSTS", payload: respone.data });
};
export const fetchuser = id => async dispatch => {
  _fetchUser(id, dispatch);
};
const _fetchUser = _.memoize(async (id, dispatch) => {
  const respone = await jsonPlaceholder.get(`./users/${id}`);
  dispatch({ type: "FETCH_USER", payload: respone.data });
});
