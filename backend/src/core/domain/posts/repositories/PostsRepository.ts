import Post from "../entities/Post";

export interface IdataCreate {
  title: string;
  author: string;
}
export interface IdataUpdate {
  title?: string;
  author?: string;
}

interface PostsRepository {
  fetchPosts(): Promise<Post[]>;

  fetchPostById(id: number): Promise<Post | string>;

  createPost(data: IdataCreate): Promise<Post | Error>;

  updatePostById(id: number, data: IdataUpdate): Promise<Post | string>;

  deletePostById(id: number): Promise<string>;
}

export default PostsRepository;
