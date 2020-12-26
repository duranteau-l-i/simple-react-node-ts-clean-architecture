import PostsRepository from "../../domain/posts/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";

class PostLoader {
  constructor(private postsRepository: PostsRepository) {}

  loadPostById(id: number): Promise<Post | string> {
    return this.postsRepository.fetchPostById(id);
  }
}

export default PostLoader;
