import Post from "../../../domain/entities/Post";
import PostRepository from "../../../domain/ports/repositories/PostsRepository";
import mockData from "./data.json";

class InMemoryPostsRepository implements PostRepository {
  private posts = mockData.posts;

  fetchPosts(): Promise<any> {
    return new Promise((resolve, reject) => {
      const dataSuccess = {
        status: "success",
        message: "",
        data: this.posts
      };
      resolve(dataSuccess);

      // const dataFailed = { status: "failed", message: "e.message", data: [] };
      // reject(dataFailed);
    });
  }

  fetchPostById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const post = this.posts.find(post => post.id === id);

      const dataSuccess = {
        status: "success",
        message: "",
        data: post
      };
      resolve(dataSuccess);

      // const dataFailed = { status: "failed", message: "e.message", data: {} };
      // reject(dataFailed);
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

      const dataSuccess = {
        status: "success",
        message: "",
        data: post
      };
      resolve(dataSuccess);

      const dataFailed = { status: "failed", message: "e.message", data: {} };
      reject(dataFailed);
    });
  }
}

export default InMemoryPostsRepository;
