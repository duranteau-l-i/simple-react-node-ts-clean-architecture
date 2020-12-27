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

  fetchPostById(id: string): Promise<Post | Error>;

  createPost(data: IdataCreate): Promise<Post | Error>;

  updatePostById(id: string, data: IdataUpdate): Promise<Post | Error>;

  deletePostById(id: string): Promise<string | Error>;
}

export default PostsRepository;
