import PostsRepository from "../../domain/posts/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";

class PostsLoader {
  constructor(private postsRepository: PostsRepository) {}

  loadPosts(): Promise<Post[]> {
    return this.postsRepository.fetchPosts();
  }
}

export default PostsLoader;
