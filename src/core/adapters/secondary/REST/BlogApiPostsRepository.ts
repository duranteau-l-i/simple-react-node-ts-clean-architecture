import axios, {AxiosResponse} from 'axios'
import Post from '../../../domain/entities/Post'
import PostsRepository from '../../../domain/ports/repositories/PostsRepository'

const URL = `${process.env.REACT_APP_API_BASE_URL}/posts`

class BlogApiPostsRepository implements PostsRepository {

  constructor() {}

  fetchPosts(): Promise<AxiosResponse<Post[]>> {
    return axios.get<Post[]>(URL)
  }

  fetchPostById(id: number): Promise<AxiosResponse<Post>> {
    return axios.get<Post>(`${URL}/${id}`)
  }
}

// const postApi = new PostsApi()
export default BlogApiPostsRepository
