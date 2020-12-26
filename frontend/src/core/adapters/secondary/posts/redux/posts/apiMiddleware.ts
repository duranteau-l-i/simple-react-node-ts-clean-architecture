import { Middleware } from "redux";

import { RootState } from "../store";

import {
  postsMiddlewareActionTypes,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST
} from "./types";

import Post from "../../../../../domain/posts/entities/Post";
import apiPostsRepository from "../../REST/ApiPostsRepository";
import PostsLoader from "../../../../../useCases/posts/PostsLoader";
import PostLoader from "../../../../../useCases/posts/PostLoader";
import PostCreator from "../../../../../useCases/posts/PostCreator";

import { setPosts, setPost, addPost } from "./actions";

export const postsApiMiddleware: Middleware<
  postsMiddlewareActionTypes,
  RootState
> = store => next => action => {
  switch (action.type) {
    case FETCH_POSTS:
      next(action);

      new PostsLoader(apiPostsRepository)
        .loadPosts()
        .then(res => {
          store.dispatch(setPosts(res.data, res.message, res.status));
        })
        .catch(e => {
          store.dispatch(setPosts(e.data, e.message, e.status));
        });

      break;

    case FETCH_POST:
      next(action);

      new PostLoader(apiPostsRepository)
        .loadPostById(action.id + 123)
        .then(res => {
          const index: number = store
            .getState()
            .posts.data.findIndex((p: Post) => p.id === res.data.id);
          if (index === -1) {
            store.dispatch(setPost(res.data, res.message, res.status));
          }
        })
        .catch(e => {
          store.dispatch(setPost(e.data, e.message, e.status));
        });

      break;

    case CREATE_POST:
      next(action);

      new PostCreator(apiPostsRepository)
        .createPost(action.data)
        .then(res => {
          store.dispatch(addPost(res.data, res.message, res.status));
        })
        .catch(e => {
          store.dispatch(addPost(e.data, e.message, e.status));
        });

      break;
  }

  return next(action);
};
