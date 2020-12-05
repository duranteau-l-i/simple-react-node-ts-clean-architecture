import React, { useState, useEffect, useCallback } from "react";
import Post from "../../core/domain/posts/entities/Post";
import postsDI from "../../core/configuration/PostDI";

// use with redux
import {
  getPosts,
  getPost
} from "../../core/adapters/secondary/posts/redux/posts/actions";
import { RootState } from "../../core/adapters/secondary/posts/redux/store";
import { useSelector, useDispatch } from "react-redux";

import AddPost from "./AddPost";
import Comments from "../Comments";

import "./post.css";

const Posts = () => {
  // use API
  const [posts, setPosts] = useState<Post[] | null>(null);

  const getData = useCallback(() => {
    postsDI
      .getPosts()
      .then(res => {
        // console.log(res.data);
        setPosts(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [posts]);

  useEffect(() => {
    if (!posts) {
      getData();
    }
  }, [posts]);

  const handlePosts = () => {
    getData();
  };

  // use REDUX
  // const dispatch = useDispatch();
  // const posts: Post[] = useSelector((state: RootState) => state.posts.data);

  // useEffect(() => {
  //   dispatch(getPosts());
  //   // dispatch(getPost(1));
  // }, []);

  // const handlePosts = () => {
  //   console.log("handlePosts");
  // };

  return (
    <div className="posts">
      <AddPost handlePosts={handlePosts} />
      {posts && (
        <div>
          {posts.map((post: Post) => (
            <div className="post" key={post.id}>
              <p key={post.id}>Title: {post.title}</p>
              <ul>
                <Comments postId={post.id} />
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
