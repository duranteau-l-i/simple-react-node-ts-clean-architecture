import Post from "../../entities/Post";
import PostLoaderResponse from "../../../useCases/PostLoaderResponse";
import PostDTO from "../../../DTO/PostDTO";

interface PostsRepository {
  fetchPosts(): Promise<PostDTO[]>;

  fetchPostById(id: number): Promise<PostDTO>;

  createPost(data: object): Promise<void>;
}

export default PostsRepository;
