import Post from "../../../../domain/posts/entities/Post";
import PostRepository from "../../../../domain/posts/ports/repositories/PostsRepository";
import PostDTO from "../../../../DTO/PostDTO";
import mockData from "./data.json";

class InMemoryPostsRepository implements PostRepository {
  private posts = mockData.posts;

  fetchPosts(): Promise<any> {
    return new Promise((resolve, reject) => {
      const list = this.posts.map((post: any) => {
        return new PostDTO(post.id, post.title, post.author);
      });
      resolve(list);

      // reject([]);
    });
  }

  fetchPostById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const post = this.posts.find(post => post.id === id);

      if (post) {
        resolve(new PostDTO(post.id, post.title, post.author));
      } else {
        reject({});
      }

      // reject({});
    });
  }

  createPost(data: Post): Promise<any> {
    return new Promise((resolve, reject) => {
      const post = {
        id: this.posts.length + 1,
        title: data.title,
        author: "typicode"
      };

      this.posts.push(post);

      resolve();

      // reject();
    });
  }
}

export default InMemoryPostsRepository;
