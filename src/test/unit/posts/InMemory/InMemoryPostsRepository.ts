import Post from "../../../../core/domain/posts/entities/Post";
import PostRepository from "../../../../core/domain/posts/ports/repositories/PostsRepository";
import ApiResponse from "../../../../core/useCases/posts/PostLoaderResponse";
import PostDTO from "../../../../core/DTO/PostDTO";

class InMemoryPostsRepository implements PostRepository {
  private posts: PostDTO[] = [];

  setPosts(data: PostDTO[]): void {
    this.posts = data;
  }

  fetchPosts(): Promise<PostDTO[]> {
    return Promise.resolve(this.posts);
  }

  fetchPostById(id: number): Promise<PostDTO> {
    const post = this.posts.find((post: any) => post.id === id);

    if (post) {
      return Promise.resolve(post);
    }

    return Promise.reject({});
  }

  createPost(data: Post): Promise<any> {
    this.posts.push(new PostDTO(data.id, data.title, data.author));
    return Promise.resolve("ok");
  }
}

export default InMemoryPostsRepository;
