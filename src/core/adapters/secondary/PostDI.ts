import postsApi from './REST/Posts'
import postsMemory from './InMemory/Posts'
import PostLoader from '../../domain/loaders/Posts'
import {PostsHandler} from '../../useCases/Posts'

const postsDI: PostLoader = new PostsHandler(postsMemory)
export default postsDI
