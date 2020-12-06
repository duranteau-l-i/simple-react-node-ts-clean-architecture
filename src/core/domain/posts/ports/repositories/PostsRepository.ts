import PostDTO from "../../../../DTO/PostDTO";

interface PostsRepository {
  fetchPosts(): Promise<PostDTO[]>;

  fetchPostById(id: number): Promise<PostDTO>;

  createPost(data: object): Promise<PostDTO>;
}

export default PostsRepository;
