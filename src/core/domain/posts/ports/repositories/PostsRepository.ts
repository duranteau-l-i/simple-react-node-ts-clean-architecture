import Post from "../../entities/Post";
import PostLoaderResponse from "../../../../useCases/posts/PostLoaderResponse";
import PostDTO from "../../../../DTO/PostDTO";

interface PostsRepository {
  fetchPosts(): Promise<PostDTO[]>;

  fetchPostById(id: number): Promise<PostDTO>;

  createPost(data: object): Promise<PostDTO>;
}

export default PostsRepository;
