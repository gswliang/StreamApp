import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./type";
import stream from "../api/stream";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const newStream = (formSubmitValue) => {
  const api = async (dispatch) => {
    stream.post("/streams", formSubmitValue);
    dispatch({ type: CREATE_STREAM, payload: response.data });
  };

  return api();
};

export const fetchStreams = () => async (dispatch) => {
  const response = await stream.post("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await stream.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValue) => async (dispatch) => {
  const response = await stream.put(`/streams/${id}`, formValue);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await stream.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

// export const testStream = (formSubmitValue) => async (dispatch) => {
//   const response = await stream.post("/streams", formSubmitValue);
//   dispatch({ type: CREATE_STREAM, payload: response.data });
// };
