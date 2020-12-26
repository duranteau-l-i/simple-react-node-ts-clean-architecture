import PostsRepository from "../../domain/posts/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";
import PostLoaderResponse from "./PostLoaderResponse";

export interface ICreatePost {
  title: string;
  author: string;
}

class PostsCreator {
  constructor(private postRepository: PostsRepository) {}

  async createPost(data: ICreatePost): Promise<PostLoaderResponse<Post>> {
    try {
      if (data.title === "") {
        throw new Error("Title should not be empty");
      }

      if (data.title.length > 50) {
        throw new Error("Title should not contains more than 50");
      }

      const post = await this.postRepository.createPost(data);

      if (!post) {
        throw new Error("create post failed");
      }

      return Promise.resolve(new PostLoaderResponse("success", "", post));
    } catch (e) {
      return Promise.reject(new PostLoaderResponse("failed", e.message, null));
    }
  }
}

export default PostsCreator;
