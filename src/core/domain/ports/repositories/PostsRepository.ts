import  Post  from '../../entities/Post'
import  {AxiosResponse} from 'axios'


export default interface PostsRepository {

  fetchPosts(): Promise<AxiosResponse<Post[]>>

  // fetchPostById(id: number): Promise<AxiosResponse<Post>>

  // createPost(data: Object): Promise<AxiosResponse<Post>>

}
