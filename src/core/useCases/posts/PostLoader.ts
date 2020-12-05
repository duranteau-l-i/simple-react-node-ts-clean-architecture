import PostsRepository from "../../domain/posts/ports/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";
import PostLoaderResponse from "./PostLoaderResponse";
import PostBuilder from "./PostBuilder";

class PostLoader {
  constructor(private postRepository: PostsRepository) {}

  loadPostById(id: number): Promise<PostLoaderResponse<Post>> {
    return new Promise((resolve, reject) => {
      return this.postRepository
        .fetchPostById(id)
        .then(response => {
          resolve(
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
        })
        .catch(e => {
          reject(new PostLoaderResponse("failed", "get post failed", e));
        });
    });
  }
}

export default PostLoader;
