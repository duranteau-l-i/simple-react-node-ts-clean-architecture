import Post from "../../../../domain/posts/entities/Post";

interface PostsRepository {
  fetchPosts(): Promise<Post[]>;

  fetchPostById(id: number): Promise<Post>;

  createPost(data: object): Promise<Post>;
}

export default PostsRepository;
