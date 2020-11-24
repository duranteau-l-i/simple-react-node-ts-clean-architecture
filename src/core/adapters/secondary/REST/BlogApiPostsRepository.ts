import axios, { AxiosResponse } from "axios";
import Post from "../../../domain/entities/Post";
import PostsRepository from "../../../domain/ports/repositories/PostsRepository";

const URL = `${process.env.REACT_APP_API_BASE_URL}/posts`;

class BlogApiPostsRepository implements PostsRepository {
  fetchPosts(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get<AxiosResponse<Post[]>>(URL)
        .then(res => {
          const dataSuccess = {
            status: "success",
            message: "",
            data: res.data
          };
          resolve(dataSuccess);
        })
        .catch(e => {
          const dataFailed = { status: "failed", message: e.message, data: [] };
          reject(dataFailed);
        });
    });
  }
}

export default BlogApiPostsRepository;
