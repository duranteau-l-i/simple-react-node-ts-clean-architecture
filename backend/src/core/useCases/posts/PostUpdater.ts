import PostsRepository, {
  IdataUpdate
} from "../../domain/posts/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";

class PostUpdater {
  constructor(private postsRepository: PostsRepository) {}

  async updatePostById(id: string, data: IdataUpdate): Promise<Post | Error> {
    if (data.title === "") {
      throw new Error("Title should not be empty");
    }

    if (data.title && data.title.length > 50) {
      throw new Error("Title should not contains more than 50");
    }

    return this.postsRepository.updatePostById(id, data);
  }
}

export default PostUpdater;
