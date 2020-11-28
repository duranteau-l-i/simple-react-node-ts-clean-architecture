import PostsApi from "../adapters/secondary/REST/BlogApiPostsRepository";
import PostsMemory from "../adapters/secondary/InMemory/InMemoryPostsRepository";
import PostsLoader from "../useCases/PostsLoader";
import PostCreater, { ICreatePost } from "../useCases/PostCreater";

import PostsRepository from "../domain/ports/repositories/PostsRepository";
import Post from "../domain/entities/Post";

import PostLoaderResponse from "../useCases/PostLoaderResponse";

const postsApi = new PostsApi();
const postsMemory = new PostsMemory();

class PostDI {
  constructor(private source: PostsRepository) {}

  getPosts(): Promise<PostLoaderResponse<Post[]>> {
    return new PostsLoader(this.source).loadPosts();
  }

  createPost(data: ICreatePost): Promise<any> {
    return new PostCreater(this.source).createPost(data);
  }
}

const postsDI = new PostDI(postsApi);
export default postsDI;
