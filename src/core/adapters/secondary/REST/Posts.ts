import axios, {AxiosResponse} from 'axios'
import IPost from '../../../domain/entities/Posts'
import PostLoader from '../../../domain/loaders/Posts'

const URL = `${process.env.REACT_APP_API_BASE_URL}/posts`

class PostsApi implements PostLoader {

  constructor() {}

  getPosts(): Promise<AxiosResponse<IPost[]>> {
    return axios.get<IPost[]>(URL)
  }

  getPost(id: number): Promise<AxiosResponse<IPost>> {
    return axios.get<IPost>(`${URL}/${id}`)
  }
}

const postApi = new PostsApi()
export default postApi
