import PostsRepository, {
  IdataCreate
} from "../../domain/posts/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";

class PostCreator {
  constructor(private postsRepository: PostsRepository) {}

  async createPost(data: IdataCreate): Promise<Post | Error> {
    if (data.title === "") {
      throw new Error("Title should not be empty");
    }

    if (data.title && data.title.length > 50) {
      throw new Error("Title should not contains more than 50");
    }

    if (!data.author) {
      throw new Error("The post must have an author");
    }

    return this.postsRepository.createPost(data);
  }
}

export default PostCreator;
