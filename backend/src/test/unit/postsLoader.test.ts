import InMemoryPostsRepository from "../../core/adapters/secondary/InMemory/InMemoryPostsRepository";
import PostsLoader from "../../core/useCases/posts/PostsLoader";
import StubPostBuilder from "../stubs/StubPostBuilder";
import Post from "../../core/domain/posts/entities/Post";

const data = [
  new StubPostBuilder().id("1").build(),
  new StubPostBuilder().id("2").title("test 2").build(),
  new StubPostBuilder().id("3").title("test 3").build()
];

describe("Get posts", () => {
  it("should get an empty array", () => {
    const inMemoryPostsRepository = new InMemoryPostsRepository([]);
    const postsLoader = new PostsLoader(inMemoryPostsRepository);

    expect(postsLoader.loadPosts()).resolves.toEqual([]);
  });

  it("should get a list of posts", () => {
    const inMemoryPostsRepository = new InMemoryPostsRepository(data);
    const postsLoader = new PostsLoader(inMemoryPostsRepository);

    expect(postsLoader.loadPosts()).resolves.toEqual([
      new Post("1", "test 1", "typicode"),
      new Post("2", "test 2", "typicode"),
      new Post("3", "test 3", "typicode")
    ]);
  });
});
