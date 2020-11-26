import PostsRepository from "../domain/ports/repositories/PostsRepository";
import Post from "../domain/entities/Post";
import ApiResponse from "../domain/DTO/ApiResponse";
class PostLoader {
  constructor(private postRepository: PostsRepository) {}
  loadPostById(id: number): Promise<ApiResponse<Post>> {
    return this.postRepository.fetchPostById(id);
  }
}

export default PostLoader;
