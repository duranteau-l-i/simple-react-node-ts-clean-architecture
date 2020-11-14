import IPost from '../../../domain/entities/Posts'
import PostLoader from '../../../domain/loaders/Posts'
import mockData from './data.json'

class PostsMemory implements PostLoader {

  constructor() {}

  getPosts(): Promise<any> {
    return Promise.resolve({data: mockData.posts})
  }

  getPost(id: number): Promise<any> {
    return Promise.resolve({data: mockData.posts.find(post => post.id === id)})
  }
}

const postMemory = new PostsMemory()
export default postMemory
