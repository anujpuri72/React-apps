import stream from "../../apis/stream";
import history from "../../history";
export const SignIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};
export const SignOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
export const fetchStreams = () => async (dispatch) => {
  const response = await stream.get("./streams");
  // console.log("1", response);
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};
export const fetchStream = (id) => async (dispatch) => {
  const response = await stream.get(`./streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  console.log("before",formValues)
  const response = await stream.post("./streams", { ...formValues, userId });
  console.log("creating",response);
  dispatch({ type: "CREATE_STREAM", payload: response.data });
  history.push("/");
};
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await stream.patch(`./streams/${id}`, formValues);
  dispatch({ type: "EDIT_STREAM", payload: response.data });
  history.push("/");
};
export const deleteStream = (id) => async (dispatch) => {
  await stream.delete(`./streams/${id}`);
  dispatch({ type: "DELETE_STREAM", payload: id });
  history.push("/");
};
