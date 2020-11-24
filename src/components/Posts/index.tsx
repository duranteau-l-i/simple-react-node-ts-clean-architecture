import React, { useState, useEffect, useCallback } from "react";
import postsDI from "../../core/configuration/PostDI";
import Post from "../../core/domain/entities/Post";

import AddPost from "./AddPost";
import Comments from "../Comments";

import "./post.css";

const Posts = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const getData = useCallback(() => {
    postsDI
      .getPosts()
      .then(res => {
        setPosts(res.data);
      })
      .catch(e => {
        console.log(e);
        setPosts([]);
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

  return (
    <div className="posts">
      <AddPost handlePosts={handlePosts} />
      {posts && (
        <div>
          {posts.map(post => (
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
