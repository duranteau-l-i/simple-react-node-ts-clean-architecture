import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

import Post from "../../../../../domain/posts/entities/Post";
import apiPostsRepository from "../../REST/ApiPostsRepository";

import PostsLoader from "../../../../../useCases/posts/PostsLoader";
import PostLoader from "../../../../../useCases/posts/PostLoader";
import PostCreator from "../../../../../useCases/posts/PostCreator";
import { ICreatePost } from "../../../../../useCases/posts/PostCreator";

import { setPosts, setPost, addPost } from "./actions";

export const getPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async dispatch => {
  new PostsLoader(apiPostsRepository)
    .loadPosts()
    .then(res => {
      dispatch(setPosts(res.data, res.message, res.status));
    })
    .catch(e => {
      dispatch(setPosts(e.data, e.message, e.status));
    });
};

export const getPost = (
  id: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  new PostLoader(apiPostsRepository)
    .loadPostById(id)
    .then(async res => {
      const posts = getState().posts.data;

      const post: Post | undefined = await posts.find(
        (p: Post) => p.id === res.data.id
      );

      if (post) {
        const same = JSON.stringify(post) === JSON.stringify(res.data);
        if (!same) {
          const postsFilered = posts.filter(p => p.id !== post.id);
          dispatch(
            setPosts([...postsFilered, res.data], res.message, res.status)
          );
        }
      } else {
        dispatch(setPost(res.data, res.message, res.status));
      }
    })
    .catch(e => {
      dispatch(setPost(e.data, e.message, e.status));
    });
};

export const createPost = (
  data: ICreatePost
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
  new PostCreator(apiPostsRepository)
    .createPost(data)
    .then(res => {
      dispatch(addPost(res.data, res.message, res.status));
    })
    .catch(e => {
      dispatch(addPost(e.data, e.message, e.status));
    });
};
