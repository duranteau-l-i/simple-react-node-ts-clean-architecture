import PostsApi from "../adapters/secondary/posts/REST/BlogApiPostsRepository";
import PostsMemory from "../adapters/secondary/posts/InMemory/InMemoryPostsRepository";
import PostsLoader from "../useCases/posts/PostsLoader";
import PostCreator, { ICreatePost } from "../useCases/posts/PostCreator";

import PostsRepository from "../domain/posts/ports/repositories/PostsRepository";
import Post from "../domain/posts/entities/Post";

import PostLoaderResponse from "../useCases/posts/PostLoaderResponse";

const postsApi = new PostsApi();
const postsMemory = new PostsMemory();

class PostDI {
  constructor(private source: PostsRepository) {}

  getPosts(): Promise<PostLoaderResponse<Post[]>> {
    return new PostsLoader(this.source).loadPosts();
  }

  createPost(data: ICreatePost): Promise<any> {
    return new PostCreator(this.source).createPost(data);
  }
}

const postsDI = new PostDI(postsApi);
export default postsDI;
