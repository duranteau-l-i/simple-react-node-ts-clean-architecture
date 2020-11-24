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

  // fetchPostById(id: number): Promise<ApiResponse<Post>> {
  // return Promise.resolve({
  //   status: "success",
  //   message: "",
  //   data: this.posts.find((post: Post) => post.id === id)
  // });
  // }
}

export default InMemoryPostsRepository;
