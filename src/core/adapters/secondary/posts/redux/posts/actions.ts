import Post from "../../../../../domain/posts/entities/Post";
import {
  postsMiddlewareActionTypes,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  postsActionTypes,
  GET_POSTS,
  GET_POST,
  ADD_POST
} from "./types";
import { ICreatePost } from "../../../../../useCases/posts/PostCreator";

// middleware
export const getPosts = (): postsMiddlewareActionTypes => {
  return {
    type: FETCH_POSTS
  };
};

export const getPost = (id: number): postsMiddlewareActionTypes => {
  return {
    type: FETCH_POST,
    id
  };
};

export const createPost = (data: ICreatePost): postsMiddlewareActionTypes => {
  return {
    type: CREATE_POST,
    data
  };
};

// reducer
export const setPosts = (
  posts: Post[],
  message: string,
  status: string
): postsActionTypes => {
  return {
    type: GET_POSTS,
    payload: posts,
    message,
    status
  };
};

export const setPost = (
  post: Post,
  message: string,
  status: string
): postsActionTypes => {
  return {
    type: GET_POST,
    payload: post,
    message,
    status
  };
};

export const addPost = (
  post: Post,
  message: string,
  status: string
): postsActionTypes => {
  return {
    type: ADD_POST,
    payload: post,
    message,
    status
  };
};
