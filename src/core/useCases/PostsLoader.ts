import PostsRepository from "../domain/ports/repositories/PostsRepository";
import Post from "../domain/entities/Post";
import PostLoaderResponse from "./PostLoaderResponse";
import PostBuilder from "./PostBuilder";
import PostDTO from "../DTO/PostDTO";

class PostsLoader {
  constructor(private postRepository: PostsRepository) {}

  loadPosts(): Promise<PostLoaderResponse<Post[]>> {
    return new Promise((resolve, reject) => {
      this.postRepository
        .fetchPosts()
        .then(response => {
          const posts = response.map((post: PostDTO) => {
            return new PostBuilder()
              .withId(post.id)
              .withTitle(post.title)
              .withAuthor(post.author)
              .build();
          });

          resolve(new PostLoaderResponse("success", "", posts));
        })
        .catch(e => {
          reject(new PostLoaderResponse("failed", "pas bon", e));
        });
    });
  }
}

export default PostsLoader;
