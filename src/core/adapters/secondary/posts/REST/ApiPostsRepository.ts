import axios, { AxiosResponse } from "axios";
import PostsRepository from "../../../../domain/posts/ports/repositories/PostsRepository";
import PostDTO from "../../../../DTO/PostDTO";
import { ICreatePost } from "../../../../useCases/posts/PostCreator";

const URL = `${process.env.REACT_APP_API_BASE_URL}/posts`;

export class ApiPostsRepository implements PostsRepository {
  fetchPosts(): Promise<PostDTO[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(URL)
        .then(res => {
          const list = res.data.map((post: any) => {
            return new PostDTO(post.id, post.title, post.author);
          });
          resolve(list);
        })
        .catch(e => {
          reject([]);
        });
    });
  }

  fetchPostById(id: number): Promise<PostDTO> {
    return new Promise((resolve, reject) => {
      axios
        .get(`${URL}/${id}`)
        .then(res => {
          resolve(new PostDTO(res.data.id, res.data.title, res.data.author));
        })
        .catch(e => {
          reject({});
        });
    });
  }

  createPost(data: ICreatePost): Promise<PostDTO> {
    return new Promise((resolve, reject) => {
      axios
        .post(`${URL}`, data)
        .then(res => {
          resolve(new PostDTO(res.data.id, res.data.title, res.data.author));
        })
        .catch(e => {
          reject({});
        });
    });
  }
}

const apiPostsRepository = new ApiPostsRepository();
export default apiPostsRepository;