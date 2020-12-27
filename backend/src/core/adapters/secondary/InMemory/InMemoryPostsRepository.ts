import Post from "../../../domain/posts/entities/Post";
import PostsRepository, {
  IdataUpdate,
  IdataCreate
} from "../../../domain/posts/repositories/PostsRepository";
import PostBuilder from "../../../useCases/posts/Post.builder";

class InMemoryPostsRepository implements PostsRepository {
  constructor(private posts: Post[]) {}

  async fetchPosts(): Promise<Post[]> {
    return this.posts;
  }

  fetchPostById(id: string): Promise<Post | Error> {
    return new Promise((resolve, reject) => {
      const post = this.posts.find((p) => p.id === id);
      if (post) {
        resolve(post);
      } else {
        throw new Error("Post not found");
      }
    });
  }

  createPost(data: IdataCreate): Promise<Post | Error> {
    return new Promise((resolve, reject) => {
      const post = new PostBuilder()
        .id(String(this.posts.length + 1))
        .title(data.title)
        .build();

      this.posts.push(post);

      resolve(post);
    });
  }

  updatePostById(id: string, data: IdataUpdate): Promise<Post | Error> {
    return new Promise((resolve, reject) => {
      const postIndex = this.posts.findIndex((p) => p.id === id);
      if (postIndex !== -1) {
        if (data.title) this.posts[postIndex].title = data.title;
        if (data.author) this.posts[postIndex].author = data.author;

        resolve(this.posts[postIndex]);
      } else {
        throw new Error("Invalid id");
      }
    });
  }

  deletePostById(id: string): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      const postIndex = this.posts.findIndex((p) => p.id === id);

      if (postIndex !== -1) {
        this.posts = this.posts.filter((p) => p.id !== id);

        resolve("Post deleted");
      } else {
        throw new Error("Invalid id");
      }
    });
  }
}

export default InMemoryPostsRepository;
