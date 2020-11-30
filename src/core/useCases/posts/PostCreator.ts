import PostsRepository from "../../domain/posts/ports/repositories/PostsRepository";
import Post from "../../domain/posts/entities/Post";
import PostLoaderResponse from "./PostLoaderResponse";
import PostDTO from "../../DTO/PostDTO";

export interface ICreatePost {
  title: string;
  author: string;
}

class PostsCreator {
  constructor(private postRepository: PostsRepository) {}

  createPost(data: ICreatePost): Promise<void> {
    return new Promise((resolve, reject) => {
      this.postRepository
        .createPost(data)
        .then(response => {
          resolve(response);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}

export default PostsCreator;
