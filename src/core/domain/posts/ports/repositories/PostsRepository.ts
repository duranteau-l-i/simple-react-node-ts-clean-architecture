import Post from "../../../../domain/posts/entities/Post";
import { ICreatePost } from "../../../../useCases/posts/PostCreator";

interface PostsRepository {
  fetchPosts(): Promise<Post[]>;

  fetchPostById(id: number): Promise<Post>;

  createPost(data: ICreatePost): Promise<Post>;
}

export default PostsRepository;
