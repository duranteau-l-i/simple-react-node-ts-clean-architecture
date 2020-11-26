import InMemoryPostsRepository from "./InMemory/InMemoryPostsRepository";
import PostsLoader from "../../core/useCases/PostsLoader";
import Post from "../../core/domain/entities/Post";
import StubPostBuilder from "./stubs/StubPostBuilder";

const data = [
  new StubPostBuilder().withId(1).withTitle("test 1").build(),
  new StubPostBuilder().withId(2).withTitle("test 2").build(),
  new StubPostBuilder().withId(3).withTitle("test 3").build()
];

describe("posts", () => {
  const inMemory = new InMemoryPostsRepository();
  const postsLoader = new PostsLoader(inMemory);

  beforeEach(done => {
    inMemory.setPosts(data);
    done();
  });

  it("should get an empty array", async () => {
    // arrange
    // inMemory.setPosts([]);
    // act
    const postsExpected = await postsLoader.loadPosts();
    // assert
    expect(postsExpected.data).toEqual([]);
  });

  it("should get a list of posts", async () => {
    // arrange
    // inMemory.setPosts(data);
    // act
    const postsExpected = await postsLoader.loadPosts();
    // assert
    expect(postsExpected.data).toEqual([
      new Post(1, "test 1", "typicode"),
      new Post(2, "test 2", "typicode"),
      new Post(3, "test 3", "typicode")
    ]);
  });
});
