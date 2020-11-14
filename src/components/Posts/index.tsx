import React, { useState, useEffect, useCallback } from "react";
import postApi from "../../core/adapters/secondary/REST/Posts";
import postMemory from "../../core/adapters/secondary/InMemory/Posts";
import PostsDI from "../../core/adapters/secondary/PostDI";
import IPost from "../../core/domain/entities/Posts";

import AddPost from "./AddPost";
import Comments from "../Comments";

import "./post.css";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[] | null>(null);

  const getData = useCallback(() => {
    PostsDI.getPosts()
      .then(res => {
        setPosts(res.data);
      })
      .catch(e => setPosts([]));
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
            <div className="post">
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
