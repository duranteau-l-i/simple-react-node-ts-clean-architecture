import Post from "../../../core/domain/entities/Post";
import PostRepository from "../../../core/domain/ports/repositories/PostsRepository";
import ApiResponse from "../../../core/domain/DTO/ApiResponse";

interface IInMemoryPosts {
  data: Post[];
}

class InMemoryPostsRepository implements PostRepository {
  private posts: Post[] = [];

  setPosts(data: Post[]): void {
    this.posts = data;
  }

  fetchPosts(): Promise<ApiResponse<Post[]>> {
    return Promise.resolve({
      status: "success",
      message: "",
      data: this.posts
    });
  }

  fetchPostById(id: number): Promise<ApiResponse<Post>> {
    const post = this.posts.find((post: any) => post.id === id);

    if (post) {
      return Promise.resolve({
        status: "success",
        message: "",
        data: post
      });
    }

    return Promise.reject({
      status: "failed",
      message: "don't exist",
      data: {}
    });
  }

  createPost(data: Post): Promise<ApiResponse<Post>> {
    this.posts.push(data);

    return Promise.resolve({
      status: "success",
      message: "",
      data: data
    });
  }
}

export default InMemoryPostsRepository;
