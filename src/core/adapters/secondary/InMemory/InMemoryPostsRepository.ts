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
}

export default InMemoryPostsRepository;
