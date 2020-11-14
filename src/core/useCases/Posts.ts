import PostsLoader from '../domain/loaders/Posts'

export class PostsHandler {

  constructor(private post: PostsLoader) {}

  getPosts() {
      return this.post.getPosts()
  }

  getPost(id: number) {
      return this.post.getPost(id)
  }

}
