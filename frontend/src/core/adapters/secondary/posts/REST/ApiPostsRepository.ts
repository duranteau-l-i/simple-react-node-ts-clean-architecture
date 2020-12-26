import axios, { AxiosResponse } from "axios";
import PostsRepository from "../../../../domain/posts/repositories/PostsRepository";
import { ICreatePost } from "../../../../useCases/posts/PostCreator";
import Post from "../../../../domain/posts/entities/Post";
import PostBuilder from "../../../../useCases/posts/PostBuilder";

const URL = `${process.env.REACT_APP_API_BASE_URL}/posts`;

export class ApiPostsRepository implements PostsRepository {
  fetchPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(URL)
        .then(res => {
          const list = res.data.map((post: Post) => {
            return new PostBuilder()
              .id(post.id)
              .title(post.title)
              .author(post.author)
              .build();
          });

          resolve(list);
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  fetchPostById(id: number): Promise<Post> {
    return new Promise((resolve, reject) => {
      axios
        .get(`${URL}/${id}`)
        .then(res => {
          resolve(
            new PostBuilder()
              .id(res.data.id)
              .title(res.data.title)
              .author(res.data.author)
              .build()
          );
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  createPost(data: ICreatePost): Promise<Post> {
    return new Promise((resolve, reject) => {
      axios
        .post(URL, data)
        .then(res => {
          resolve(
            new PostBuilder()
              .id(res.data.id)
              .title(res.data.title)
              .author(res.data.author)
              .build()
          );
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}

const apiPostsRepository = new ApiPostsRepository();
export default apiPostsRepository;
