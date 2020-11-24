import Post from "../../entities/Post";
import ApiResponse from "../../DTO/ApiResponse";

interface PostsRepository {
  fetchPosts(): Promise<ApiResponse<Post[]>>;
}

export default PostsRepository;
