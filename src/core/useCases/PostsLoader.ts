import PostsRepository from '../domain/ports/repositories/PostsRepository'

export class PostsLoader {
   postRepository;

  constructor(postRepository: PostsRepository) {
    this.postRepository = postRepository
  }

  loadPosts() {
      return this.postRepository.fetchPosts()
  }

}
