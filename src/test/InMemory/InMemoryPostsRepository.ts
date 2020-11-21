import Post  from '../../core/domain/entities/Post'
import PostRepository from '../../core/domain/ports/repositories/PostsRepository'

class InMemoryPostsRepository implements PostRepository {

  private posts:any = {
    data: []
  }

  constructor() {}

  fetchPosts(): Promise<any> {
    return Promise.resolve(this.posts)
  }

  fetchPostById(id: number): Promise<any> {
    return Promise.resolve(this.posts.data.find((post: Post) => post.id === id))
    return Promise.resolve("")
  }

  setPosts(data: Post[]): void {
    this.posts.data = data
  }
}

// const postMemory = new InMemoryPostsRepository()
export default InMemoryPostsRepository
