import PostsApi from '../adapters/secondary/REST/BlogApiPostsRepository'
import PostsMemory from '../adapters/secondary/InMemory/InMemoryPostsRepository'

import {PostsLoader} from '../useCases/PostsLoader'
import {PostLoader} from '../useCases/PostLoader'

const postsApi = new PostsApi()
const postsMemory = new PostsMemory()

// const postsDI = {
//   postsLoader: new PostsLoader(postsApi),
//   postLoader: new PostLoader(postsApi)
// }

class PostDI {
  source

  constructor( source: any) {
    this.source = source
  }

  getPosts() {
    return new PostsLoader(this.source).loadPosts()
  }
}

const postsDI = new PostDI(postsApi)
export default postsDI
