import PostsRepository from "../../domain/posts/ports/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";
import PostLoaderResponse from "./PostLoaderResponse";
import PostBuilder from "./PostBuilder";

export interface ICreatePost {
  title: string;
  author: string;
}

class PostsCreator {
  constructor(private postRepository: PostsRepository) {}

  async createPost(data: ICreatePost): Promise<PostLoaderResponse<Post>> {
    try {
      if (data.title === "") {
        throw new Error("Body should not be empty");
      }

      if (data.title.length > 50) {
        throw new Error("Body should not contains more than 200");
      }

      const response = await this.postRepository.createPost(data);

      if (!response) {
        Promise.reject(
          new PostLoaderResponse("failed", "create post failed", {})
        );
      }

      return Promise.resolve(
        new PostLoaderResponse(
          "success",
          "",
          new PostBuilder()
            .withId(response.id)
            .withTitle(response.title)
            .withAuthor(response.author)
            .build()
        )
      );
    } catch (e) {
      return Promise.reject(
        new PostLoaderResponse("failed", "create post failed", {})
      );
    }
  }
}

export default PostsCreator;
