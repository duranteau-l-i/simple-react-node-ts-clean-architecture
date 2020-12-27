import InMemoryPostsRepository from "../../core/adapters/secondary/InMemory/InMemoryPostsRepository";
import PostLoader from "../../core/useCases/posts/PostLoader";
import StubPostBuilder from "../stubs/StubPostBuilder";
import Post from "../../core/domain/posts/entities/Post";

const data = [
  new StubPostBuilder().id("1").build(),
  new StubPostBuilder().id("2").title("test 2").build(),
  new StubPostBuilder().id("3").title("test 3").build()
];

describe("Get post", () => {
  it("should get a post", () => {
    const inMemoryPostsRepository = new InMemoryPostsRepository(data);
    const postLoader = new PostLoader(inMemoryPostsRepository);

    expect(postLoader.loadPostById("1")).resolves.toEqual(
      new Post("1", "test 1", "typicode")
    );
  });

  it("should get an error", () => {
    const inMemoryPostsRepository = new InMemoryPostsRepository(data);
    const postLoader = new PostLoader(inMemoryPostsRepository);

    expect(postLoader.loadPostById("5")).rejects.toEqual(
      Error("Post not found")
    );
  });
});
