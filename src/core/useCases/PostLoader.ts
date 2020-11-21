import PostsRepository from '../domain/ports/repositories/PostsRepository'

export class PostLoader {
   postRepository;

  constructor(postRepository: PostsRepository) {
    this.postRepository = postRepository
  }

  // loadPostById(id: number) {
  //     return this.postRepository.fetchPostById(id)
  // }

}
