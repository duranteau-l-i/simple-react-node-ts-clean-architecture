import PostsRepository from "../../domain/posts/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";

class PostDeletor {
  constructor(private postsRepository: PostsRepository) {}

  deletePostById(id: string): Promise<string | Error> {
    return this.postsRepository.deletePostById(id);
  }
}

export default PostDeletor;
