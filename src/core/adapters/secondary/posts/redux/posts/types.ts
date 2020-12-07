import Post from "../../../../../domain/posts/entities/Post";
import { ICreatePost } from "../../../../../useCases/posts/PostCreator";

// Middleware
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";

interface fetchPostsAction {
  type: typeof FETCH_POSTS;
}

interface fetchPostAction {
  type: typeof FETCH_POST;
  id: number;
}

interface createPostAction {
  type: typeof CREATE_POST;
  data: ICreatePost;
}

export type postsMiddlewareActionTypes =
  | fetchPostsAction
  | fetchPostAction
  | createPostAction;

// reducer
export interface postsState {
  data: Post[];
  message: string;
  status: string;
}

export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";

interface getPostsAction {
  type: typeof GET_POSTS;
  payload: Post[] | null;
  message: string;
  status: string;
}

interface getPostAction {
  type: typeof GET_POST;
  payload: Post | null;
  message: string;
  status: string;
}

interface addPostAction {
  type: typeof ADD_POST;
  payload: Post | null;
  message: string;
  status: string;
}

export type postsActionTypes = getPostsAction | getPostAction | addPostAction;
