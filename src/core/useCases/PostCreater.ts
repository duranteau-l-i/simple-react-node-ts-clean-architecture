import PostsRepository from "../domain/ports/repositories/PostsRepository";
import Post from "../domain/entities/Post";
import ApiResponse from "../domain/DTO/ApiResponse";

class PostsCreater {
  constructor(private postRepository: PostsRepository) {}

  createPost(data: any): Promise<ApiResponse<Post>> {
    if (data.title !== "" && data.author !== "") {
      return this.postRepository.createPost(data);
    }

    return Promise.reject({
      status: "failed",
      message: "a value is missing",
      data: {}
    });
  }
}

export default PostsCreater;
