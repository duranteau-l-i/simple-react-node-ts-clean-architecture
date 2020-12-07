import InMemoryPostsRepository from "../../../core/adapters/secondary/posts/InMemory/InMemoryPostsRepository";
import PostsLoader from "../../../core/useCases/posts/PostsLoader";
import StubPostBuilder from "./stubs/StubPostBuilder";
import Post from "../../../core/domain/posts/entities/Post";
import PostLoaderResponse from "../../../core/useCases/posts/PostLoaderResponse";

const data = [
  new StubPostBuilder().id(1).title("test 1").author("typicode").build(),
  new StubPostBuilder().id(2).title("test 2").author("typicode").build(),
  new StubPostBuilder().id(3).title("test 3").author("typicode").build()
];

describe("posts", () => {
  it("should get an empty array", async () => {
    // arrange
    const inMemory = new InMemoryPostsRepository([]);
    const postsLoader = new PostsLoader(inMemory);
    // act
    expect.assertions(1);
    // assert
    expect(postsLoader.loadPosts()).resolves.toEqual(
      new PostLoaderResponse("success", "", [])
    );
  });

  it("should get a list of posts", async () => {
    // arrange
    const inMemory = new InMemoryPostsRepository(data);
    const postsLoader = new PostsLoader(inMemory);
    // act
    expect.assertions(1);
    // assert
    expect(postsLoader.loadPosts()).resolves.toEqual(
      new PostLoaderResponse("success", "", [
        new Post(1, "test 1", "typicode"),
        new Post(2, "test 2", "typicode"),
        new Post(3, "test 3", "typicode")
      ])
    );
  });
});
