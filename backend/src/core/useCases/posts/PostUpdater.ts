import PostsRepository, {
  IdataUpdate
} from "../../domain/posts/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";

class PostUpdater {
  constructor(private postsRepository: PostsRepository) {}

  updatePostById(id: number, data: IdataUpdate): Promise<Post | string> {
    return this.postsRepository.updatePostById(id, data);
  }
}

export default PostUpdater;
