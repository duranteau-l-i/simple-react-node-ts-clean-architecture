import PostsRepository from "../domain/ports/repositories/PostsRepository";
import Post from "../domain/entities/Post";
import ApiResponse from "../domain/DTO/ApiResponse";

class PostsLoader {
  constructor(private postRepository: PostsRepository) {}

  loadPosts(): Promise<ApiResponse<Post[]>> {
    return this.postRepository.fetchPosts();
  }
}

export default PostsLoader;
