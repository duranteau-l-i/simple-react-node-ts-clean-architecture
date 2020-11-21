import InMemoryPostsRepository from './InMemory/InMemoryPostsRepository'
import {PostsLoader} from '../core/useCases/PostsLoader'
import Post from '../core/domain/entities/Post'

const data =  [
  new Post(
    1,
    "data json-server",
    "typicode"
  ),
  new Post(
     2,
     "data test",
     "typicode",
  ),
  new Post(
     3,
     "data test 2",
     "typicode",
  )
]

describe("posts", () => {

  const inMemory = new InMemoryPostsRepository()
  const postsLoader = new PostsLoader(inMemory)

  it("get posts", () => {
    // arrange
    inMemory.setPosts(data)
    // act
    const postsExpected = postsLoader.loadPosts()
    console.log(postsExpected)
    // assert
    expect(postsExpected).toEqual(Promise.resolve({"data": [
      {
        "id": 1,
        "title": "data json-server",
        "author": "typicode"
      },
      {
        "id": 2,
        "title": "data test",
        "author": "typicode",
      },
      {
        "id": 3,
        "title": "data test 2",
        "author": "typicode",
      }
    ]}))
  })

})
