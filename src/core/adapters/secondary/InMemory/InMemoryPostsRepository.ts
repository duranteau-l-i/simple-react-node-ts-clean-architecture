import Post  from '../../../domain/entities/Post'
import PostRepository from '../../../domain/ports/repositories/PostsRepository'
import mockData from './data.json'

class InMemoryPostsRepository implements PostRepository {

 posts: Object = {data: []}

  constructor() {}

  fetchPosts(): Promise<any> {
    return Promise.resolve(this.posts)
  }

  fetchPostById(id: number): Promise<any> {
    // return Promise.resolve(this.posts.data.find(post => post.id === id))
    return Promise.resolve("")
  }

  setPosts(data: Post[]): void {
    this.posts = Promise.resolve({"data":data})
  }
}

// const postMemory = new InMemoryPostsRepository()
export default InMemoryPostsRepository
