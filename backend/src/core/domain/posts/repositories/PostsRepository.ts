import Post from "../entities/Post";

export interface IdataUpdate {
  title?: string;
  author?: string;
}

interface PostsRepository {
  fetchPosts(): Promise<Post[]>;

  fetchPostById(id: number): Promise<Post | string>;

  updatePostById(id: number, data: IdataUpdate): Promise<Post | string>;

  deletePostById(id: number): Promise<string>;
}

export default PostsRepository;
