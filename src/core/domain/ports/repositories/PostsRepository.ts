import Post from "../../entities/Post";
import ApiResponse from "../../DTO/ApiResponse";

interface PostsRepository {
  fetchPosts(): Promise<ApiResponse<Post[]>>;

  fetchPostById(id: number): Promise<ApiResponse<Post>>;

  createPost(data: Post): Promise<ApiResponse<Post>>;
}

export default PostsRepository;
