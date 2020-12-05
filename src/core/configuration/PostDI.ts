import apiPostsRepository from "../adapters/secondary/posts/REST/ApiPostsRepository";
import PostsMemory from "../adapters/secondary/posts/InMemory/InMemoryPostsRepository";
import mockData from "../adapters/secondary/posts/InMemory/data.json";
import PostsLoader from "../useCases/posts/PostsLoader";
import PostCreator, { ICreatePost } from "../useCases/posts/PostCreator";

import PostsRepository from "../domain/posts/ports/repositories/PostsRepository";
import Post from "../domain/posts/entities/Post";

import PostLoaderResponse from "../useCases/posts/PostLoaderResponse";

const postsMemory = new PostsMemory(mockData.posts);

class PostDI {
  constructor(private source: PostsRepository) {}

  getPosts(): Promise<PostLoaderResponse<Post[]>> {
    return new PostsLoader(this.source).loadPosts();
  }

  createPost(data: ICreatePost): Promise<PostLoaderResponse<Post>> {
    return new PostCreator(this.source).createPost(data);
  }
}

const postsDI = new PostDI(apiPostsRepository);
export default postsDI;
