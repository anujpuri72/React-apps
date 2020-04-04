import stream from "../../apis/stream";
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
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};
export const fetchStream = (id) => async (dispatch) => {
  const response = await stream.get(`./streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await stream.post("./streams", { ...formValues, userId });
  dispatch({ type: "CREATE_STREAM", payload: response.data });
};
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await stream.put(`./streams/${id}`, formValues);
  dispatch({ type: "EDIT_STREAM", payload: response.data });
};
export const deleteStream = (id) => async (dispatch) => {
  await stream.delete(`./streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: id });
};
