import PostsRepository from "../../domain/posts/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";
import PostLoaderResponse from "./PostLoaderResponse";

class PostsLoader {
  constructor(private postRepository: PostsRepository) {}

  loadPosts(): Promise<PostLoaderResponse<Post[]>> {
    return new Promise((resolve, reject) => {
      this.postRepository
        .fetchPosts()
        .then(posts => {
          resolve(new PostLoaderResponse("success", "", posts));
        })
        .catch(e => {
          reject(new PostLoaderResponse("failed", e.message, null));
        });
    });
  }
}

export default PostsLoader;
