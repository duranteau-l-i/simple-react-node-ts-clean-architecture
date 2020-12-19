import Post from "../../../../domain/posts/entities/Post";
import PostRepository from "../../../../domain/posts/ports/repositories/PostsRepository";
import PostBuilder from "../../../../useCases/posts/PostBuilder";

class InMemoryPostsRepository implements PostRepository {
  constructor(private posts: Post[]) {}

  fetchPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const list = this.posts.map((post: Post) => {
        return new Post(post.id, post.title, post.author);
      });
      resolve(list);

      // reject(new Error("get posts failed"));
    });
  }

  fetchPostById(id: number): Promise<Post> {
    return new Promise((resolve, reject) => {
      const post = this.posts.find((post: Post) => post.id === id);

      if (post) {
        resolve(
          new PostBuilder()
            .id(post.id)
            .title(post.title)
            .author(post.author)
            .build()
        );
      } else {
        reject(new Error("get post failed"));
      }
    });
  }

  createPost(data: Post): Promise<Post> {
    return new Promise((resolve, reject) => {
      const post = new PostBuilder()
        .id(this.posts.length + 1)
        .title(data.title)
        .build();

      this.posts.push(post);

      resolve(post);

      // reject(new Error("create post failed"));
    });
  }
}

export default InMemoryPostsRepository;
