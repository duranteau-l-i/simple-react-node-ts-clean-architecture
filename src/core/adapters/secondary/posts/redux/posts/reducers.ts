import {
  postsState,
  postsActionTypes,
  GET_POSTS,
  GET_POST,
  ADD_POST
} from "./types";

const initialState: postsState = {
  data: [],
  message: "",
  status: ""
};

export function postsReducer(state = initialState, action: postsActionTypes) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        data: action.payload,
        message: action.message,
        status: action.status
      };

    case GET_POST:
      return {
        ...state,
        data: [...state.data, action.payload],
        message: action.message,
        status: action.status
      };

    case ADD_POST:
      return {
        ...state,
        data: [...state.data, action.payload],
        message: action.message,
        status: action.status
      };

    default:
      return state;
  }
}
