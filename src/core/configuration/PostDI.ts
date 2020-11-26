import PostsApi from "../adapters/secondary/REST/BlogApiPostsRepository";
import PostsMemory from "../adapters/secondary/InMemory/InMemoryPostsRepository";
import PostsLoader from "../useCases/PostsLoader";
import PostCreater from "../useCases/PostCreater";

import PostsRepository from "../domain/ports/repositories/PostsRepository";
import Post from "../domain/entities/Post";

import ApiResponse from "../domain/DTO/ApiResponse";

const postsApi = new PostsApi();
const postsMemory = new PostsMemory();

class PostDI {
  constructor(private source: PostsRepository) {}

  getPosts(): Promise<ApiResponse<Post[]>> {
    return new PostsLoader(this.source).loadPosts();
  }

  createPost(data: any): Promise<ApiResponse<Post>> {
    return new PostCreater(this.source).createPost(data);
  }
}

const postsDI = new PostDI(postsApi);
export default postsDI;
