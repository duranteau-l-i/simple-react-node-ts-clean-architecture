import IPost from '../entities/Posts'
import  {AxiosResponse} from 'axios'


export default interface Posts {

  getPosts(): Promise<AxiosResponse<IPost[]>>

  getPost(id: number): Promise<AxiosResponse<IPost>>

  // createPost(data: Object): Promise<AxiosResponse<IPost>>

}
