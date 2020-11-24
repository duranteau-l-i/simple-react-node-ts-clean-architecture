import PostsRepository from "../domain/ports/repositories/PostsRepository";
import Post from "../domain/entities/Post";
import { AxiosResponse } from "axios";
class PostLoader {
  // constructor(private postRepository: PostsRepository) {}
  // loadPost(id: number): Promise<AxiosResponse<Post>> {
  //   return this.postRepository.fetchPostById(id);
  // }
}

export default PostLoader;
