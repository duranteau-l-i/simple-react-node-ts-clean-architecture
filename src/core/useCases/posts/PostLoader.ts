import PostsRepository from "../../domain/posts/ports/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";
import PostLoaderResponse from "./PostLoaderResponse";

class PostLoader {
  constructor(private postRepository: PostsRepository) {}

  loadPostById(id: number): Promise<PostLoaderResponse<Post>> {
    return new Promise((resolve, reject) => {
      return this.postRepository
        .fetchPostById(id)
        .then(post => {
          resolve(new PostLoaderResponse("success", "", post));
        })
        .catch(e => {
          reject(new PostLoaderResponse("failed", e.message, null));
        });
    });
  }
}

export default PostLoader;
