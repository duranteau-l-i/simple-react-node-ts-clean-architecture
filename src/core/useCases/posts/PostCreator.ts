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

  createPost(data: ICreatePost): Promise<PostLoaderResponse<Post>> {
    return new Promise((resolve, reject) => {
      this.postRepository
        .createPost(data)
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
          reject(new PostLoaderResponse("failed", "create post failed", e));
        });
    });
  }
}

export default PostsCreator;
