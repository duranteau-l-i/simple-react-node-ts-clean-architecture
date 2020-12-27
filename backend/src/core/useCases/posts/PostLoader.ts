import PostsRepository from "../../domain/posts/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";

class PostLoader {
  constructor(private postsRepository: PostsRepository) {}

  loadPostById(id: string): Promise<Post | Error> {
    return this.postsRepository.fetchPostById(id);
  }
}

export default PostLoader;
